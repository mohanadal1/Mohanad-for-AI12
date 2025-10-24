const seedApps = [
    {
        name: "ChatGPT",
        company: "OpenAI",
        url: "https://chat.openai.com",
        free: "نعم",
        domain: "Education",
        description: "نموذج محادثة متقدم يعتمد على GPT لتوليد نص وتفاعل ذكي.",
        logo: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><rect rx='20' ry='20' width='120' height='120' fill='%23233' /><text x='50%' y='55%' font-size='18' fill='%23fff' text-anchor='middle' font-family='Arial'>ChatGPT</text></svg>",
        media: ""
    },
    {
        name: "Gemini",
        company: "Google",
        url: "https://ai.google",
        free: "نعم/جزئياً",
        domain: "Research",
        description: "نموذج ذكاء اصطناعي من جوجل يختص بالبحث والفهم المتقدم.",
        logo: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><circle cx='60' cy='60' r='60' fill='%23444' /><text x='50%' y='55%' font-size='16' fill='%23fff' text-anchor='middle' font-family='Arial'>Gemini</text></svg>",
        media: ""
    },
    {
        name: "GitHubCopilot",
        company: "GitHub",
        url: "https://github.com/features/copilot",
        free: "لا (اشتراك)",
        domain: "Development",
        description: "مساعد برمجي يعتمد على نماذج الذكاء الاصطناعي لتكميل الشيفرات.",
        logo: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><rect width='120' height='120' rx='18' fill='%23222' /><text x='50%' y='55%' font-size='14' fill='%23fff' text-anchor='middle' font-family='Arial'>Copilot</text></svg>",
        media: ""
    },
    {
        name: "MidJourney",
        company: "MidJourney",
        url: "https://www.midjourney.com",
        free: "جزئياً",
        domain: "Creative",
        description: "أداة توليد صور فنية باستخدام الذكاء الاصطناعي.",
        logo: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><ellipse cx='60' cy='60' rx='60' ry='40' fill='%23333' /><text x='50%' y='55%' font-size='14' fill='%23fff' text-anchor='middle' font-family='Arial'>MidJourney</text></svg>",
        media: ""
    },
    {
        name: "DeepSeekAI",
        company: "DeepSeek",
        url: "https://www.deepseek.com",
        free: "جزئياً",
        domain: "Education",
        description: " نموذج ذكاء اصطناعي قادر على التفكير المنطقي في وقت قصير وبكلفة منخفضة كثيرًا",
        logo: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><rect rx='12' ry='12' width='120' height='120' fill='%23455' /><text x='50%' y='55%' font-size='16' fill='%23fff' text-anchor='middle' font-family='Arial'>DeepSeekAI·E</text></svg>",
        media: ""
    }
];

if (!localStorage.getItem('ai_apps_seeded')) {
    localStorage.setItem('ai_apps', JSON.stringify(seedApps));
    localStorage.setItem('ai_apps_seeded', '1');
}

function renderApps() {
    const apps = JSON.parse(localStorage.getItem('ai_apps') || '[]');
    const container = $('#appsTable');

    if (apps.length === 0) {
        container.html('<p>لا توجد تطبيقات حالياً. أضف تطبيقاً من صفحة "إضافة تطبيق".</p>');
        return;
    }

    let html = `
    <table class="styled-table">
      <thead>
        <tr>
          <th>اسم التطبيق</th>
          <th>الشركة</th>
          <th>مجال الاستخدام</th>
          <th>مجاني؟</th>
          <th>عرض التفاصيل</th>
        </tr>
      </thead>
      <tbody>
  `;

    apps.forEach((app, idx) => {
        html += `
      <tr>
        <td>${app.name}</td>
        <td>${app.company}</td>
        <td>${app.domain}</td>
        <td>${app.free}</td>
        <td><button class="btn show-details" data-idx="${idx}">إظهار التفاصيل</button></td>
      </tr>
      <tr class="details-row" id="details-${idx}" style="display:none;">
        <td colspan="5">
          <div class="details-card">
            <div class="logo">
              <img src="${app.logo}" alt="${app.name} logo" width="120" height="120">
            </div>
            <div class="details-text">
              <h3>${app.name}</h3>
              <p><strong>الشركة:</strong> ${app.company}</p>
              <p><strong>الوصف:</strong> ${app.description}</p>
              <p><strong>الموقع:</strong> 
                <a href="${app.url}" target="_blank" rel="noopener">${app.url}</a>
              </p>
              ${app.media ? `<div class="media"><iframe src="${app.media}" frameborder="0" allowfullscreen></iframe></div>` : ''}
            </div>
          </div>
        </td>
      </tr>
    `;
    });

    html += '</tbody></table>';
    container.html(html);
}

$(document).ready(function () {
    renderApps();

    $('#appsTable').on('click', '.show-details', function () {
        const idx = $(this).data('idx');
        $(`#details-${idx}`).slideToggle();
    });
});
