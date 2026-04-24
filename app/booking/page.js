import React from 'react';

const BookingForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    fetch('https://app.formcarry.com/form/OIXO2uLLaeZ/submit', {
      method: 'POST',
      body: formData,
    })
    .then(response => {
      if (response.ok) {
        alert('تم إرسال النموذج بنجاح!'); // Success message in Arabic
      } else {
        alert('حدث خطأ أثناء إرسال النموذج. يرجى المحاولة مرة أخرى.'); // Error message in Arabic
      }
    });
  };

  return (
    <div className="booking-form">
      <h1>نموذج الطلب</h1>
      <p>املأ الاستمارة لتأكيد طلبيتك</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="car-model">موديل السيارة:</label>
        <select id="car-model" name="car-model" required>
          <option value="Model1">Model1</option>
          <option value="Model2">Model2</option>
          <option value="Model3">Model3</option>
          <option value="Model4">Model4</option>
          <option value="Model5">Model5</option>
          <option value="Model6">Model6</option>
          <option value="Model7">Model7</option>
          <option value="Model8">Model8</option>
          <option value="Model9">Model9</option>
          <option value="Model10">Model10</option>
          <option value="Model11">Model11</option>
          <option value="Model12">Model12</option>
        </select>

        <label htmlFor="full-name">الاسم الكامل:</label>
        <input type="text" id="full-name" name="full-name" required />

        <label htmlFor="email">البريد الإلكتروني:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="phone">رقم الهاتف:</label>
        <input type="tel" id="phone" name="phone" required />

        <label htmlFor="address">العنوان:</label>
        <input type="text" id="address" name="address" required />

        <label htmlFor="registration-number">رقم التسجيل:</label>
        <input type="text" id="registration-number" name="registration-number" required />

        <label htmlFor="message">رسالة (اختياري):</label>
        <textarea id="message" name="message"></textarea>

        <button type="submit">إرسال</button>
      </form>
    </div>
  );
};

export default BookingForm;