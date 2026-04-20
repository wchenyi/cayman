(function() {
    let searchData = [];

    // 初始化搜索功能
    function initSearch() {
        fetch('/search.json')
            .then(response => response.json())
            .then(data => {
                searchData = data;
                console.log('Search index loaded:', searchData.length + ' items');
            })
            .catch(error => {
                console.error('Error loading search index:', error);
            });
    }

    // 执行搜索
    function performSearch(query) {
        if (!query || query.length < 2) {
            return [];
        }

        const lowerQuery = query.toLowerCase();
        const results = [];

        searchData.forEach((item) => {
            let score = 0;
            const titleLower = item.title.toLowerCase();
            const contentLower = item.content.toLowerCase();
            const tagsLower = item.tags.toLowerCase();

            // 标题匹配（权重最高）
            if (titleLower.includes(lowerQuery)) {
                score += 100;
                if (titleLower.startsWith(lowerQuery)) {
                    score += 50;
                }
            }

            // 标签匹配
            if (tagsLower.includes(lowerQuery)) {
                score += 50;
            }

            // 内容匹配
            if (contentLower.includes(lowerQuery)) {
                score += 10;
                const matches = contentLower.match(new RegExp(lowerQuery, 'g'));
                if (matches) {
                    score += matches.length * 2;
                }
            }

            if (score > 0) {
                const contentIndex = contentLower.indexOf(lowerQuery);
                let excerpt = '';
                if (contentIndex !== -1) {
                    const start = Math.max(0, contentIndex - 100);
                    const end = Math.min(item.content.length, contentIndex + 150);
                    excerpt = '...' + item.content.substring(start, end) + '...';
                } else {
                    excerpt = item.content.substring(0, 150) + '...';
                }

                results.push({
                    ...item,
                    score: score,
                    excerpt: excerpt
                });
            }
        });

        results.sort((a, b) => b.score - a.score);
        return results.slice(0, 10);
    }

    // 显示搜索结果
    function displayResults(results, query) {
        const resultsContainer = document.getElementById('search-results');
        
        if (results.length === 0) {
            resultsContainer.innerHTML = '<div class="no-results">未找到与 "' + query + '" 相关的结果</div>';
            return;
        }

        let html = '<div class="results-count">找到 ' + results.length + ' 个结果</div>';
        
        results.forEach(result => {
            const highlightedTitle = result.title.replace(
                new RegExp(query, 'gi'),
                match => '<mark>' + match + '</mark>'
            );
            const highlightedExcerpt = result.excerpt.replace(
                new RegExp(query, 'gi'),
                match => '<mark>' + match + '</mark>'
            );

            html += `
                <div class="search-result-item">
                    <h3 class="result-title">
                        <a href="${result.url}">${highlightedTitle}</a>
                    </h3>
                    ${result.date ? '<div class="result-date">' + result.date + '</div>' : ''}
                    <div class="result-excerpt">${highlightedExcerpt}</div>
                    ${result.tags ? '<div class="result-tags">标签: ' + result.tags + '</div>' : ''}
                </div>
            `;
        });

        resultsContainer.innerHTML = html;
    }

    // 打开搜索弹窗
    function openSearchModal() {
        const modal = document.getElementById('search-modal');
        const input = document.getElementById('search-input');
        if (modal && input) {
            modal.classList.add('active');
            setTimeout(() => input.focus(), 100);
            document.body.style.overflow = 'hidden';
        }
    }

    // 关闭搜索弹窗
    function closeSearchModal() {
        const modal = document.getElementById('search-modal');
        const input = document.getElementById('search-input');
        const results = document.getElementById('search-results');
        
        if (modal) {
            modal.classList.remove('active');
            if (input) input.value = '';
            if (results) results.innerHTML = '';
            document.body.style.overflow = '';
        }
    }

    // 初始化
    document.addEventListener('DOMContentLoaded', function() {
        initSearch();

        const searchTrigger = document.getElementById('search-trigger');
        if (searchTrigger) {
            searchTrigger.addEventListener('click', openSearchModal);
        }

        const closeBtn = document.getElementById('search-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', closeSearchModal);
        }

        const modal = document.getElementById('search-modal');
        if (modal) {
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    closeSearchModal();
                }
            });
        }

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeSearchModal();
            }
        });

        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            let searchTimeout;
            searchInput.addEventListener('input', function(e) {
                clearTimeout(searchTimeout);
                searchTimeout = setTimeout(() => {
                    const query = e.target.value.trim();
                    if (query.length >= 2) {
                        const results = performSearch(query);
                        displayResults(results, query);
                    } else {
                        document.getElementById('search-results').innerHTML = '';
                    }
                }, 300);
            });
        }

        document.addEventListener('keydown', function(e) {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                openSearchModal();
            }
        });
    });
})();
