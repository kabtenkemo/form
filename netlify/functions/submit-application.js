import { neon } from '@netlify/neon';

export const handler = async (event, context) => {
  // التأكد من أن الطلب POST فقط
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const sql = neon(); // هيقرأ NETLIFY_DATABASE_URL تلقائياً
  const { full_name, phone, email, national_id, birth_date } = JSON.parse(event.body);

  try {
    // إدخال البيانات في الجدول
    await sql`
      INSERT INTO applications (full_name, phone, email, national_id, birth_date)
      VALUES (${full_name}, ${phone}, ${email}, ${national_id}, ${birth_date})
    `;

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Success" }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};