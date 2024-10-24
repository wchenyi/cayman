// 返回顶部功能
function handleScroll() {
    const backToTopButton = document.querySelector('.back-to-top');
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// 搜索功能
class PageSearcher {
    constructor() {
        this.searchIndex = [];
        this.buildSearchIndex();
    }

    async buildSearchIndex() {
        // 获取当前页面内容
        const mainContent = document.querySelector('.main-content');
        if (mainContent) {
            this.addToIndex(window.location.pathname, mainContent.textContent);
        }
    }

    addToIndex(url, content) {
        this.searchIndex.push({
            url: url,
            content: content.toLowerCase(),
            title: document.title
        });
    }

    search(query) {
        const results = [];
        const searchTerms = query.toLowerCase().split(' ');
        
        this.searchIndex.forEach(page => {
            let matches = true;
            searchTerms.forEach(term => {
                if (!page.content.includes(term)) {
                    matches = false;
                }
            });
            
            if (matches) {
                const context = this.getSearchContext(page.content, searchTerms[0]);
                results.push({
                    title: page.title,
                    url: page.url,
                    context: context
                });
            }
        });
        
        return results;
    }

    getSearchContext(content, term) {
        const index = content.indexOf(term);
        const start = Math.max(0, index - 50);
        const end = Math.min(content.length, index + 100);
        return '...' + content.slice(start, end).replace(/\s+/g, ' ') + '...';
    }
}

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    const searcher = new PageSearcher();
    const searchPanel = document.querySelector('.search-panel');
    const searchInput = document.querySelector('.search-input');
    const searchResults = document.querySelector('.search-results');
    
    // 监听滚动事件
    window.addEventListener('scroll', handleScroll);
    
    // 返回顶部按钮点击事件
    document.querySelector('.back-to-top').addEventListener('click', scrollToTop);
    
    // 搜索按钮点击事件
    document.querySelector('.search-button').addEventListener('click', function() {
        searchPanel.classList.add('active');
    });
    
    // 关闭搜索面板
    document.querySelector('.close-search').addEventListener('click', function() {
        searchPanel.classList.remove('active');
    });
    
    // 搜索输入处理
    searchInput.addEventListener('input', function(e) {
        const query = e.target.value;
        if (query.length < 2) {
            searchResults.innerHTML = '';
            return;
        }
        
        const results = searcher.search(query);
        searchResults.innerHTML = results.map(result => `
            <div class="search-result-item" onclick="window.location.href='${result.url}'">
                <h4>${result.title}</h4>
                <p>${result.context}</p>
            </div>
        `).join('');
    });
});
