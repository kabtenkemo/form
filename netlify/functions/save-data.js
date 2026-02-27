import { neon } from '@netlify/neon';

export const handler = async (event, context) => {
    // 1. السماح فقط بطلبات POST
    if (event.httpMethod !== "POST") {
        return { 
            statusCode: 405, 
            body: JSON.stringify({ error: "Method Not Allowed" }) 
        };
    }

    // 2. الربط التلقائي بقاعدة بيانات Neon
    const sql = neon(); 

    try {
        // 3. استلام البيانات من الفرونت إيند (تأكد من مطابقة الأسماء للكود في HTML)
        const { full_name, phone, email, national_id, birth_date, gender, job } = JSON.parse(event.body);

        // 4. التأكد من وجود الجدول وتحديثه (Schema Management)
        // بنعمل Create للجدول لو مش موجود، وبنضيف الأعمدة الجديدة لو مش موجودة
        await sql`
            CREATE TABLE IF NOT EXISTS applications (
                id SERIAL PRIMARY KEY,
                full_name TEXT NOT NULL,
                phone TEXT NOT NULL,
                email TEXT NOT NULL,
                national_id VARCHAR(14) NOT NULL,
                birth_date DATE NOT NULL,
                gender TEXT,
                job TEXT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `;

        // 5. إدخال البيانات الجديدة
        await sql`
            INSERT INTO applications (full_name, phone, email, national_id, birth_date, gender, job)
            VALUES (${full_name}, ${phone}, ${email}, ${national_id}, ${birth_date}, ${gender}, ${job})
        `;

        // 6. رد النجاح
        return {
            statusCode: 200,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: "تم حفظ بياناتك بنجاح في قاعدة البيانات" }),
        };

    } catch (error) {
        console.error("خطأ في الباك إيند:", error);
        return {
            statusCode: 500,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ error: "فشل في حفظ البيانات: " + error.message }),
        };
    }
};
