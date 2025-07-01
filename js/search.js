const searchFunc = function (path, search_id, content_id) {
    'use strict';
    fetch(path)
        .then(res => res.json())
        .then(datas => {
            const $input = document.getElementById(search_id);
            if (!$input) return;
            const $resultContent = document.getElementById(content_id);
            $input.addEventListener('input', function () {
                let str = '<ul class="search-result-list">';
                const keywords = this.value.trim().toLowerCase().split(/[\s\-]+/);
                $resultContent.innerHTML = "";
                if (this.value.trim().length <= 0) {
                    // 没有输入时显示提示
                    $resultContent.innerHTML = '<div class="search-empty-tip">请输入关键词查找文章…</div>';
                    return;
                }
                let hasResult = false;
                datas.forEach(function (data) {
                    let isMatch = true;
                    let index_title = -1;
                    let index_content = -1;
                    let first_occur = -1;
                    const data_title = data.title ? data.title.trim() : "Untitled";
                    const data_content = data.content ? data.content.trim().replace(/<[^>]+>/g, "") : "";
                    const data_url = data.url;
                    if (data_content !== '') {
                        keywords.forEach(function (keyword, i) {
                            index_title = data_title.toLowerCase().indexOf(keyword);
                            index_content = data_content.toLowerCase().indexOf(keyword);
                            if (index_title < 0 && index_content < 0) {
                                isMatch = false;
                            } else {
                                if (index_content < 0) index_content = 0;
                                if (i === 0) first_occur = index_content;
                            }
                        });
                    } else {
                        isMatch = false;
                    }
                    if (isMatch) {
                        hasResult = true;
                        str += "<li><a href='" + data_url + "' class='search-result-title'>" + data_title + "</a>";
                        if (first_occur >= 0) {
                            let start = first_occur - 20;
                            let end = first_occur + 80;
                            if (start < 0) start = 0;
                            if (start === 0) end = 100;
                            if (end > data_content.length) end = data_content.length;
                            let match_content = data_content.substring(start, end);
                            keywords.forEach(function (keyword) {
                                const regS = new RegExp(keyword, "gi");
                                match_content = match_content.replace(regS, function (match) {
                                    return "<em class=\"search-keyword\">" + match + "</em>";
                                });
                            });
                            str += "<p class=\"search-result\">" + match_content + "...</p>";
                        }
                        str += "</li>";
                    }
                });
                str += "</ul>";
                if (hasResult) {
                    $resultContent.innerHTML = str;
                } else {
                    $resultContent.innerHTML = '<div class="search-empty-tip">没有找到相关内容，试试其他关键词吧！</div>';
                }
            });
            // 初始时显示提示
            $resultContent.innerHTML = '<div class="search-empty-tip">这里会显示你搜索到的文章</div>';
        });
};