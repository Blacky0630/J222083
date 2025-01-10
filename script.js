document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.gallery-nav a'); // カテゴリボタン
    const categories = document.querySelectorAll('.gallery-category'); // カテゴリセクション

    navLinks.forEach(link => {
		link.addEventListener('click', event => {
			event.preventDefault(); // デフォルト動作を無効化
	
			// 全カテゴリを非表示
			categories.forEach(category => category.classList.remove('active'));
	
			// 対象のカテゴリを表示
			const targetCategory = document.getElementById(link.dataset.category);
			if (targetCategory) {
				targetCategory.classList.add('active');
			}
		});
	});
    // 初期表示
    document.getElementById('Fanart').classList.add('active');
});
