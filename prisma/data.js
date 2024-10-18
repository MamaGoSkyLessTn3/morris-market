const randomNumber = (min, max) => {
	return Math.floor(Math.random() * (max - min) + min)
}

module.exports = {
	// Данные для сидинга пользователей НЕ ТРОГАТЬ НАхУЙ!
	userData: [
		{
			fullName: 'Иван Иванов',
			phone: '79992222222',
			role: 'USER',
		},
		{
			fullName: 'Алексей Смирнов',
			phone: '79991111111',
			role: 'ADMIN',
		},
	],

	// Данные для сидинга категорий ТРОГАТЬ НАхУЙ!
	// поля - name(название), imageURL(ссылка на фото)
	categoryData: [
		{
			name: 'Снеки',
			imageURL:
				'https://cm.samokat.ru/processed/category/937f0b01-eea7-43c4-834a-c1e866a7b03d.jpg',
		},
		{
			name: 'Салаты',
			imageURL:
				'https://cm.samokat.ru/processed/category/96acdb5c-5f62-4a22-a5e1-5660c4b7161d.jpg',
		},
		{
			name: 'Напитки',
			imageURL:
				'https://cm.samokat.ru/processed/category/c089d695-80d7-4546-8c73-05b5b9ef8481.jpg',
		},
		{
			name: 'Молочка',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/8fd6c4b1-6904-45c5-9dd0-0eedd612af6a.jpg',
		},
	],

	// Данные для сидинга рецептов ТРОГАТЬ НАхУЙ!
	// поля - name(название), time(время приготовления), imageURL(ссылка на фото)
	// tags(теги), ingredients(ингредиенты), stepsAtAll(количество шагов)
	// steps(шаги)
	// Брать только с рецептов которые на сайте самоката
	recipeData: [
		{
			//1
			name: 'Сырники на рисовой муке',
			time: 25,
			imageURL:
				'https://web-static.samokat.ru/public/images/recipes/syrniki-na-risovoy-muke-cover--preview.jpg',
			tags: ['Завтрак', 'Быстро готовится', 'Низкоколорийно'],
			ingredients: [
				'Творог 3-6%',
				'Рисовая мука',
				'Подсолнечное масло',
				'Яйца',
			],
			stepsAtAll: 4,
		},
		{
			//2
			name: 'домашние котлеты',
			time: 30,
			imageURL:
				'https://web-static.samokat.ru/public/images/recipes/domashnie-kotlety-cover.jpg',
			tags: ['Ужин', 'Булат одбряет', 'Вкусно'],
			ingredients: ['фарш', 'молоко', 'яйцо', 'чеснок'],
			stepsAtAll: 5,
		},
	],

	// Данные для сидинга шагов приготовления ТРОГАТЬ НАхУЙ!
	// поля - step(шаг), description(описание), imageURL(ссылка на фото)
	// recipeId(идентификатор рецепта)(внешний ключ)(ссылка на рецепт)(айдишник конкретного рецепта )
	recipeProcessData: [
		{
			step: 1,
			description:
				'Чтобы приготовить пышные сырники на рисовой муке, смешайте творог с яйцом до однородной консистенции. Затем добавьте муку. Если любите сладкие сырники — не забудьте про сахар или сироп',
			imageURL:
				'https://web-static.samokat.ru/public/images/recipes/syrniki-na-risovoy-muke-step--1.jpg',
			recipeId: 1,
		},
		{
			step: 2,
			description:
				'Разогрейте сковороду и добавьте немного подсолнечного масла. Смочите руки холодной водой и слепите кружочек. Сделать ровный бок у сырника можно ножом, как на фото',
			imageURL:
				'https://web-static.samokat.ru/public/images/recipes/syrniki-na-risovoy-muke-step--2.jpg',
			recipeId: 1,
		},
		{
			step: 3,
			description:
				'Положите сырники на сковородку и чуть прижмите лопаткой. Жарьте до золотистой корочки по 3–5 минут с каждой стороны. Или можно запечь сырники в духовке — 10–15 минут при 200 °C',
			imageURL:
				'https://web-static.samokat.ru/public/images/recipes/syrniki-na-risovoy-muke-step--3.jpg',

			recipeId: 1,
		},
		{
			step: 4,
			description:
				'Подавайте сырники со сгущёнкой или вареньем, фруктами или со сметаной. Все ингредиенты для сырников — в подборке',
			imageURL:
				'https://web-static.samokat.ru/public/images/recipes/syrniki-na-risovoy-muke-step--4.jpg',
			recipeId: 1,
		},
		{
			step: 1,
			description:
				'Готовим домашние котлеты с хлебом и луком. Для начала замочите ломтики хлеба в молоке на пару минут. Мелко нарежьте лук. Чтобы глаза не слезились, заранее положите луковицу на 10 минут в холодильник',
			imageURL:
				'https://web-static.samokat.ru/public/images/recipes/syrniki-na-risovoy-muke-step--4.jpg',
			recipeId: 2,
		},
		{
			step: 2,
			description:
				'Готовим домашние котлеты с хлебом и луком. Для начала замочите ломтики хлеба в молоке на пару минут. Мелко нарежьте лук. Чтобы глаза не слезились, заранее положите луковицу на 10 минут в холодильник',
			imageURL:
				'https://web-static.samokat.ru/public/images/recipes/syrniki-na-risovoy-muke-step--4.jpg',
			recipeId: 2,
		},
		{
			step: 3,
			description:
				'Готовим домашние котлеты с хлебом и луком. Для начала замочите ломтики хлеба в молоке на пару минут. Мелко нарежьте лук. Чтобы глаза не слезились, заранее положите луковицу на 10 минут в холодильник',
			imageURL:
				'https://web-static.samokat.ru/public/images/recipes/syrniki-na-risovoy-muke-step--4.jpg',
			recipeId: 2,
		},
	],

	// Данные для сидинга продуктов приготовления ТРОГАТЬ НАхУЙ!
	// Всего два айишника, связная модель используется для подстановки компонентов продуктов в рецепт(используемые продукты в этом рецепте)
	productsInRecipeData: [
		{
			recipeId: 1,
			productId: 2,
		},
		{
			recipeId: 1,
			productId: 1,
		},
		{
			recipeId: 1,
			productId: 3,
		},
		{
			recipeId: 1,
			productId: 4,
		},
		{
			recipeId: 1,
			productId: 5,
		},
		{
			recipeId: 2,
			productId: 9,
		},
		{
			recipeId: 2,
			productId: 6,
		},
		{
			recipeId: 2,
			productId: 8,
		},
	],
	// Данные для сидинга продуктов приготовления ТРОГАТЬ НАхУЙ!
	// Продуктов нужно дохуя делаешь любые че по кайфу
	//поля name-название desc-большое описание !!! ОБЯЗАТЕЛЬНО БОЛЬШОЕ ОПИСАНИЕ !!!
	// compound- это состав imageURL-КАРТИНКА gram-граммы kilocalories-калорийы protein-проценты
	// fats-жиры carbohydrates-белки price-ценг categoryID-ид категории ВАЖНО ПО ЭТОМУ АЙДИШНИКУ БУДЕТ РЕНДЕРИТСЯ(тот самый айдишник в CategoryData которого ты не видишь потому что он сам сабой делается так что придется считать самому ну либо комментить АЙДИ)
	productData: [
		// Снеки
		{
			name: 'Чипсы со вкусом сыра',
			description:
				'Хрустящие чипсы с насыщенным сырным вкусом. Эти чипсы подойдут для легкого перекуса или для компании друзей. Идеально сочетаются с различными соусами и прохладительными напитками. Незаменимый атрибут любого пикника или вечеринки.',
			compound: 'Картофель, растительное масло, соль, сырный ароматизатор.',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/74d7b406-e486-46f2-af10-c958c12f38ea.jpg',
			gram: 123,
			kilocalories: randomNumber(300, 500),
			protein: randomNumber(5, 10),
			fats: randomNumber(20, 30),
			carbohydrates: randomNumber(40, 60),
			price: 300,
			categoryId: 1,
		},
		{
			name: 'Сухарики с беконом',
			description:
				'Ароматные ржаные сухарики с беконовым вкусом. Отличный выбор для тех, кто ценит насыщенные вкусы и хрустящие закуски. Идеальны для перекуса в дороге или на работе. Хорошо сочетаются с легкими напитками или пивом.',
			compound: 'Ржаной хлеб, растительное масло, беконовый ароматизатор.',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/ed4ead2c-e25f-4015-91c6-23ac656a9f08.jpg',
			gram: randomNumber(50, 150),
			kilocalories: randomNumber(300, 500),
			protein: randomNumber(7, 12),
			fats: randomNumber(10, 20),
			carbohydrates: randomNumber(50, 70),
			price: randomNumber(50, 150),
			categoryId: 1, // ID категории "Снеки"
		},
		{
			name: 'Ореховая смесь',
			description:
				'Микс из жареных орехов и сухофруктов. Богатый источник энергии и полезных жиров. Подойдет для здорового перекуса на протяжении дня. Сочетает в себе вкус и пользу для активных людей и тех, кто ценит натуральные продукты.',
			compound: 'Миндаль, кешью, фундук, изюм, курага.',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/24dc2306-abe0-49ec-b4b8-4f606f5e7504.jpg',
			gram: randomNumber(100, 200),
			kilocalories: randomNumber(500, 700),
			protein: randomNumber(15, 25),
			fats: randomNumber(30, 50),
			carbohydrates: randomNumber(40, 60),
			price: randomNumber(300, 500),
			categoryId: 1, // ID категории "Снеки"
		},
		// Салаты
		{
			name: 'Мимоза',
			description:
				'Традиционный салат с рыбными консервами и яйцами. Отлично подойдет для праздничного стола или семейного ужина. Комбинация ингредиентов делает салат одновременно легким и сытным. Прекрасно сочетается с гарнирами и хлебом.',
			compound: 'Рыбные консервы, яйца, морковь, картофель, майонез.',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/279fb725-e2ac-4e00-b1c8-92b7fa9b17ca.jpg',
			gram: randomNumber(200, 350),
			kilocalories: randomNumber(400, 600),
			protein: randomNumber(12, 22),
			fats: randomNumber(10, 20),
			carbohydrates: randomNumber(15, 30),
			price: randomNumber(300, 700),
			categoryId: 2, // ID категории "Салаты"
		},
		{
			name: 'Винегрет',
			description:
				'Салат из свеклы, картофеля и моркови с маслом. Классическое блюдо русской кухни, которое подается на любом праздничном столе. Полезный, богатый клетчаткой салат, который подходит для вегетарианцев. Часто употребляется как самостоятельное блюдо или как гарнир.',
			compound:
				'Свекла, картофель, морковь, соленые огурцы, растительное масло.',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/b3e00265-3bea-4ee6-97b0-5944d7aa4b7a.jpg',
			gram: randomNumber(200, 400),
			kilocalories: randomNumber(300, 500),
			protein: randomNumber(8, 15),
			fats: randomNumber(5, 12),
			carbohydrates: randomNumber(30, 50),
			price: randomNumber(250, 600),
			categoryId: 2, // ID категории "Салаты"
		},
		{
			name: 'Салат с креветками',
			description:
				'Салат с креветками, авокадо и зеленью. Идеально подходит для легкого обеда или ужина. Богат витаминами и полезными жирами, этот салат станет отличным выбором для тех, кто следит за своим питанием. Освежающий и питательный, с нотками лимонного соуса.',
			compound: 'Креветки, авокадо, салатный микс, лимонный соус.',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/9a89c6bb-e548-4b36-a590-6a44462bd6ed.jpg',
			gram: randomNumber(200, 350),
			kilocalories: randomNumber(350, 600),
			protein: randomNumber(20, 30),
			fats: randomNumber(12, 22),
			carbohydrates: randomNumber(10, 20),
			price: randomNumber(400, 800),
			categoryId: 2, // ID категории "Салаты"
		},
		{
			name: 'Пепси',
			description:
				'Освежающий напиток с классическим вкусом колы. Отличный выбор для любителей газированных напитков. Подается охлажденным для максимального наслаждения вкусом. Незаменимый спутник любых мероприятий или просто для повседневного употребления.',
			compound: 'Вода, сахар, углекислый газ, ароматизаторы.',
			imageURL:
				'https://cm.samokat.ru/processed/l/original/143454_1028151812.jpg',
			gram: randomNumber(250, 500),
			kilocalories: randomNumber(100, 200),
			protein: 0,
			fats: 0,
			carbohydrates: randomNumber(25, 40),
			price: randomNumber(100, 300),
			categoryId: 3, // ID категории "Напитки"
		},
		{
			name: 'Лимонад',
			description:
				'Газированный напиток с лимонным вкусом. Освежающий вкус лимона делает этот напиток идеальным для жаркого дня. Сочетает в себе сладость и кислоту, что создает приятное послевкусие. Подходит для любого времени года, особенно летом.',
			compound: 'Вода, сахар, лимонная кислота, углекислый газ.',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/9d0910e7-05f2-494a-aa71-79784fee1f75.jpg',
			gram: randomNumber(250, 500),
			kilocalories: randomNumber(90, 180),
			protein: 0,
			fats: 0,
			carbohydrates: randomNumber(20, 35),
			price: randomNumber(100, 300),
			categoryId: 3, // ID категории "Напитки"
		},
		{
			name: 'апельсиновый сок',
			description:
				'Свежевыжатый апельсиновый сок без добавок. Полезный и богатый витамином C напиток. Идеален для завтрака или в качестве освежающего напитка в любое время дня. Освежает и бодрит, благодаря естественной сладости апельсинов.',
			compound: 'Апельсиновый сок 100%.',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/8d811f5c-1585-4431-85df-acf8b87ec708.jpg',
			gram: randomNumber(250, 500),
			kilocalories: randomNumber(80, 150),
			protein: randomNumber(1, 3),
			fats: randomNumber(0, 1),
			carbohydrates: randomNumber(20, 35),
			price: randomNumber(200, 400),
			categoryId: 3, // ID категории "Напитки"
		},
		{
			name: 'Чай Lipton',
			description:
				'Холодный зелёный чай. Освежает и утоляет жажду. Ещё вкуснее, если пить охлаждённым.',
			compound:
				'Вода, сахар, фруктоза, экстракт зелёного чая, регуляторы кислотности (лимонная кислота, яблочная кислота, цитрат натрия 3-замещённый), антиокислитель аскорбиновая кислота, натуральный ароматизатор, подсластитель экстракт стевии',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/6fffa6bb-8a3c-40dd-a6fb-82ee4960e65e.jpg',
			gram: randomNumber(250, 500),
			kilocalories: randomNumber(80, 150),
			protein: randomNumber(1, 3),
			fats: randomNumber(0, 1),
			carbohydrates: randomNumber(20, 35),
			price: randomNumber(200, 400),
			categoryId: 3, // ID категории "Напитки"
		},
	],
}
//САМОЕ ГЛАВНОЕ - ПРОДУКТЫ КОТОРЫЕ ЕСТЬ РАНДОМНО СТАВЯТ ЦЕНЫ УБИРАЙ ЭТО НАхУЙ
