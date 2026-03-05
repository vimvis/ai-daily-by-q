document.addEventListener('DOMContentLoaded', function() {
    // 오늘 날짜 표시
    const dateElement = document.getElementById('today-date');
    if (dateElement) {
        const today = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
        dateElement.textContent = today.toLocaleDateString('ko-KR', options);
    }
    
    // 오늘의 뉴스 로드
    loadTodayBrief();
    
    // 아카이브 로드
    loadArchive();
});

async function loadTodayBrief() {
    const container = document.getElementById('today-summary');
    if (!container) return;
    
    try {
        const today = new Date().toISOString().split('T')[0];
        const response = await fetch(`./${today}/summary.json`);
        
        if (!response.ok) {
            container.innerHTML = '<li class="loading">오늘의 브리핑을 준비 중입니다.<br>매일 아침 7시에 업데이트됩니다.</li>';
            return;
        }
        
        const data = await response.json();
        displayBrief(data, container);
        updateLinks(today);
        
    } catch (error) {
        console.error('Failed to load brief:', error);
        container.innerHTML = '<li class="loading">브리핑을 불러오는 중 오류가 발생했습니다.</li>';
    }
}

function displayBrief(data, container) {
    if (!data.headlines || data.headlines.length === 0) {
        container.innerHTML = '<li class="loading">오늘의 브리핑이 없습니다.</li>';
        return;
    }
    
    container.innerHTML = '';
    data.headlines.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>${item.title}</strong>
            <span class="desc">${item.description}</span>
        `;
        container.appendChild(li);
    });
}

function updateLinks(date) {
    const reportLink = document.getElementById('report-link');
    const podcastLink = document.getElementById('podcast-link');
    
    if (reportLink) {
        reportLink.href = `./${date}/report.html`;
    }
    if (podcastLink) {
        podcastLink.href = `./${date}/podcast.html`;
    }
}

async function loadArchive() {
    const container = document.getElementById('archive-list');
    if (!container) return;
    
    try {
        const response = await fetch('./archive.json');
        if (!response.ok) return;
        
        const data = await response.json();
        displayArchive(data, container);
        
    } catch (error) {
        console.error('Failed to load archive:', error);
    }
}

function displayArchive(data, container) {
    container.innerHTML = '';
    
    data.items.forEach(item => {
        const div = document.createElement('div');
        div.className = 'archive-item';
        div.innerHTML = `
            <span class="archive-date">${formatDate(item.date)}</span>
            <span class="archive-title">${item.title}</span>
            <a href="${item.url}" class="archive-link">View →</a>
        `;
        container.appendChild(div);
    });
}

function formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString('ko-KR', { month: 'short', day: 'numeric' });
}