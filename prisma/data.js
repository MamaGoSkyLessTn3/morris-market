const randomNumber = (min, max) => {
	return Math.floor(Math.random() * (max - min) + min)
}

module.exports = {
	// Данные для сидинга пользователей НЕ ТРОГАТЬ НАхУЙ!
	

	// Данные для сидинга категорий ТРОГАТЬ НАхУЙ!
	// поля - name(название), imageURL(ссылка на фото)
	categoryData: [
		//1
		{
			name: 'Снеки',
			imageURL:
				'https://cm.samokat.ru/processed/category/937f0b01-eea7-43c4-834a-c1e866a7b03d.jpg',
		},
		//2
		{
			name: 'Салаты',
			imageURL:
				'https://cm.samokat.ru/processed/category/96acdb5c-5f62-4a22-a5e1-5660c4b7161d.jpg',
		},
		//3
		{
			name: 'Напитки',
			imageURL:
				'https://cm.samokat.ru/processed/category/c089d695-80d7-4546-8c73-05b5b9ef8481.jpg',
		},
		//4
		{
			name: 'Мясо и рыба',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/96f4f725-7c2f-45ad-abf5-2bf20f107377.jpg',
		},
		//5
		{
			name: 'От морриса',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/1476961f-e4fb-402c-a53e-62af5aea3aa9.jpg',
		},
		//6
		{
			name: 'Молочка',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/8fd6c4b1-6904-45c5-9dd0-0eedd612af6a.jpg',
		},

		{
			// 7
			name: 'Хлеб и выпечка',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/d47d3bad-c148-4366-97de-34eb45e09ae1.jpg',
		},
		{
			// 8
			name: 'Овощи,грибы и зелень',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/df15ce00-c28b-4f87-b6a0-04588c5e4b34.jpg',
		},
		{
			// 9
			name: 'Бакалея',
			imageURL:
				'https://cm.samokat.ru/processed/l/public/ed3a34f991c6d32d_4607001850090.jpg',
		},
		{
			// 10
			name: 'Для животных',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/e8e11fcc-9b96-41e0-8f80-c9c2e646680c.jpg',
		},
		{
			// 11
			name: 'Морозилка',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/3c160d56-9524-465e-acba-ced18a47a6ec.jpg',
		},
		{
			// 12
			name: 'Сладкое',
			imageURL:
				'https://cm.samokat.ru/processed/l/original/153094_71457865.jpg',
		},
		{
			// 13
			name: 'ЗОЖ и вегетарианство',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/cb550797-06b4-4e2e-875d-3406cc3ea5ac.jpg',
		},
		{
			// 14
			name: 'Уход',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/f9b7d41d-4fe3-4032-99c6-847fd40adee4.jpg',
		},
		{
			// 15
			name: 'Для детей и родителей',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/70c724cc-6998-4c25-8555-d263d29e124d.jpg',
		},
		{
			// 16
			name: 'Для дома',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/46f6ea25-b91d-4d9e-86ca-967a954470f4.jpg',
		},
		{
			// 17
			name: 'Готовая еда',
			imageURL:
				'https://cm.samokat.ru/processed/l/public/9bbec31f5cba0478_4660263400052-1.jpg',
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
			name: 'Домашние котлеты',
			time: 30,
			imageURL:
				'https://web-static.samokat.ru/public/images/recipes/domashnie-kotlety-cover.jpg',
			tags: ['Ужин', 'Булат одбряет', 'Вкусно'],
			ingredients: ['фарш', 'молоко', 'яйцо', 'чеснок'],
			stepsAtAll: 5,
		},
		{
			//3
			name: 'Фаршированные перцы',
			time: 60,
			imageURL:
				'https://web-static.samokat.ru/public/images/recipes/farshirovannye-pertsy-cover.jpg',
			tags: ['Обед', 'Булат одбряет', 'Вкусно'],
			ingredients: [
				'фарш',
				'перцы',
				'рис',
				'сливки 30-33%',
				'томатная паста',
				'чеснок',
			],
			stepsAtAll: 5,
		},
		{
			//4
			name: 'Грибной крем-суп',
			time: 45,
			imageURL:
				'https://web-static.samokat.ru/public/images/recipes/gribnoy-krem-sup-cover.jpg',
			tags: ['Обед', 'Булат одбряет', 'Вкусно'],
			ingredients: [
				'шампиньон',
				'картофель',
				'рис',
				'репчатый лук',
				'сливки',
				'сухарики',
				'растительное масло',
				'соль',
			],
			stepsAtAll: 4,
		},
		{
			//5
			name: 'Кабачковые оладьи',
			time: 25,
			imageURL:
				'https://web-static.samokat.ru/public/images/recipes/kabachkovye-oladi-cover.jpg',
			tags: ['Завтрак', 'Булат одбряет', 'Вкусно'],
			ingredients: [
				'срдений кабачок',
				'яйцо',
				'мука',
				'чеснок',
				'петрушка',
				'растительное масло',
				'соль',
			],
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
		{
			step: 1,
			description:
				'Простой рецепт фаршированных перцев с томатной подливкой. Промойте перцы, срежьте у них верхушки и уберите сердцевину с семенами. Верхушки не выкидывайте! Они понадобятся при готовке',
			imageURL:
				'https://web-static.samokat.ru/public/images/recipes/farshirovannye-pertsy-step--1.jpg',
			recipeId: 3,
		},
		{
			step: 2,
			description:
				'Промытый рис высыпьте в кипящую подсоленную воду и варите 7 минут. Потом откиньте на дуршлаг. Пока рис варится, обжарьте лук на масле за 3 минуты. Добавьте зелень и жарьте ещё минуту',
			imageURL:
				'https://web-static.samokat.ru/public/images/recipes/farshirovannye-pertsy-step--2.jpg',
			recipeId: 3,
		},
		{
			step: 3,
			description:
				'Смешайте рис, фарш, зелень и лук, соль и перец. Нафаршируйте этой смесью перцы. Потом накройте их верхушками и положите в глубокую сковородку или кастрюлю',
			imageURL:
				'https://web-static.samokat.ru/public/images/recipes/farshirovannye-pertsy-step--3.jpg',

			recipeId: 3,
		},
		{
			step: 4,
			description:
				'Обжарьте чеснок на масле, добавьте томатную пасту. Влейте сливки, посолите и поперчите. Готовьте 7 минут на слабом огне, потом положите зелень. Это будет соус',
			imageURL:
				'https://web-static.samokat.ru/public/images/recipes/farshirovannye-pertsy-step--4.jpg',
			recipeId: 3,
		},
		{
			step: 5,
			description:
				'Залейте фаршированные перцы соусом и готовьте на среднем огне под крышкой 35 минут. Перед подачей дайте остыть в течение 10 минут',
			imageURL:
				'https://web-static.samokat.ru/public/images/recipes/farshirovannye-pertsy-step--5.jpg',
			recipeId: 3,
		},
		{
			step: 1,
			description:
				'Готовим простой грибной крем-суп из шампиньонов. Нарежьте шампиньоны и лук небольшими кусочками. Жарьте на сковороде 10–15 минут',
			imageURL:
				'https://web-static.samokat.ru/public/images/recipes/gribnoy-krem-sup-step--1.jpg',
			recipeId: 4,
		},
		{
			step: 2,
			description:
				'Отварите картофель в подсоленной воде и разрежьте его на несколько частей',
			imageURL:
				'https://web-static.samokat.ru/public/images/recipes/gribnoy-krem-sup-step--2.jpg',
			recipeId: 4,
		},
		{
			step: 3,
			description:
				'К картофелю добавьте грибы, лук и сливки. Измельчите всё блендером до однородной массы. Посолите и поперчите по вкусу',
			imageURL:
				'https://web-static.samokat.ru/public/images/recipes/gribnoy-krem-sup-step--4.jpg',

			recipeId: 4,
		},
		{
			step: 4,
			description:
				'Разлейте крем-суп по тарелкам и добавьте сверху немного сухариков. Их можно сделать самим или купить уже готовые',
			imageURL: '',
			recipeId: 4,
		},
		{
			step: 1,
			description:
				'Простой и быстрый рецепт кабачковых оладьев с чесноком. Для начала разбейте яйцо в глубокой миске. Поперчите, посолите и взбейте венчиком',
			imageURL:
				'https://web-static.samokat.ru/public/images/recipes/kabachkovye-oladi-step--1.jpg',
			recipeId: 5,
		},
		{
			step: 2,
			description:
				'Кабачки натрите на крупной тёрке. Если овощ не молодой — срежьте грубую кожуру и уберите семена. Мелко нарежьте петрушку',
			imageURL:
				'https://web-static.samokat.ru/public/images/recipes/kabachkovye-oladi-step--2.jpg',
			recipeId: 5,
		},
		{
			step: 3,
			description:
				'Смешайте кабачок, петрушку и яйца. Добавьте муку и ещё раз хорошо перемешайте',
			imageURL:
				'https://web-static.samokat.ru/public/images/recipes/kabachkovye-oladi-step--3.jpg',

			recipeId: 5,
		},
		{
			step: 4,
			description:
				'Жарьте кабачковые оладьи на масле до румяной корочки. Подавайте со сметаной, йогуртом без добавок или соусом с чесноком',
			imageURL:
				'https://web-static.samokat.ru/public/images/recipes/kabachkovye-oladi-step--4.jpg',
			recipeId: 5,
		},
	],

	// Данные для сидинга продуктов приготовления ТРОГАТЬ НАхУЙ!
	// Всего два айишника, связная модель используется для подстановки компонентов продуктов в рецепт(используемые продукты в этом рецепте)

	// Данные для сидинга продуктов приготовления ТРОГАТЬ НАхУЙ!
	// Продуктов нужно дохуя делаешь любые че по кайфу
	//поля name-название desc-большое описание !!! ОБЯЗАТЕЛЬНО БОЛЬШОЕ ОПИСАНИЕ !!!
	// compound- это состав imageURL-КАРТИНКА gram-граммы kilocalories-калорийы protein-проценты
	// fats-жиры carbohydrates-белки price-ценг categoryID-ид категории ВАЖНО ПО ЭТОМУ АЙДИШНИКУ БУДЕТ РЕНДЕРИТСЯ(тот самый айдишник в CategoryData которого ты не видишь потому что он сам сабой делается так что придется считать самому ну либо комментить АЙДИ)
	productData: [
		// Снеки
		{
			//1
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
			//2
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
			//3
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
		{
			//4
			name: 'Чипсы Lays.игристое',
			description: 'Вау чипсы лейз с игристом, вы там вообще сдурели?',
			compound:
				'Картофель, растительные масла, комплексная пищевая добавка (сахар, соль, усилители вкуса и аромата (глутамат натрия 1-замещённый, 5-гуанилат натрия 2-замещённый), вкусоароматические вещества, порошок малины). Может содержать следы сои, порошков рыбы, ракообразных, горчицы, молочных продуктов. Содержит глютен',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/caffc84d-d5e2-4920-8588-f28779cf7d6b.jpg',
			gram: randomNumber(100, 200),
			kilocalories: randomNumber(500, 700),
			protein: randomNumber(15, 25),
			fats: randomNumber(30, 50),
			carbohydrates: randomNumber(40, 60),
			price: randomNumber(300, 500),
			categoryId: 1, // ID категории "Снеки"
		},
		{
			//5
			name: 'Кешью жареный',
			description:
				'Сладковатый вкус и насыщенный арома.Кешью богат жирными кислотами, витаминами и минералами',
			compound:
				'Ядра кешью обжарены на сухой сковороде без масла. Имеют сладковатый вкус и насыщенный ореховый аромат. В кешью много жирных омега-кислот, витаминов группы B и минералов. Можно есть просто так или добавлять в десерты, салаты и выпечку.',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/59d3b367-860e-40e2-9290-4c5c6c324bfa.jpg',
			gram: randomNumber(100, 200),
			kilocalories: randomNumber(500, 700),
			protein: randomNumber(15, 25),
			fats: randomNumber(30, 50),
			carbohydrates: randomNumber(40, 60),
			price: randomNumber(300, 500),
			categoryId: 1, // ID категории "Снеки"
		},
		{
			//6
			name: 'Кукурузные палочки',
			description:
				'Хрустящие кукурузные палочки, посыпанные сахарной пудрой. Без искусственных красителей и консервантов.(Кнорм магрегор одобряет)',
			compound:
				'Крупа кукурузная, сахарная пудра, масло растительное подсолнечное, соль, натуральный ароматизатор. Может содержать следы молочного белка, сои, глютена',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/b61c75da-ffc8-4bb3-81b7-09da7d267f3c.jpg',
			gram: randomNumber(100, 200),
			kilocalories: randomNumber(500, 700),
			protein: randomNumber(15, 25),
			fats: randomNumber(30, 50),
			carbohydrates: randomNumber(40, 60),
			price: randomNumber(300, 500),
			categoryId: 1, // ID категории "Снеки"
		},
		{
			//7
			name: 'Фисташки',
			description:
				'Фисташки в скорлупе, обжаренные с солью. Содержат много селена, фолиевой кислоты и полезных жиров. Подойдут для перекуса или в качестве закуски к пенному.',
			compound: 'Орехи фисташки в скорлупе, соль',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/8904ea18-c034-407d-8857-dcd11e135e73.jpg',
			gram: randomNumber(100, 200),
			kilocalories: randomNumber(500, 700),
			protein: randomNumber(15, 25),
			fats: randomNumber(30, 50),
			carbohydrates: randomNumber(40, 60),
			price: randomNumber(300, 500),
			categoryId: 1, // ID категории "Снеки"
		},
		{
			//8
			name: 'Cheetos,сыр',
			description:
				'Хрустящие кукурузные палочки со вкусом сыра. Подойдут для перекуса или в качестве закуски к пенному.',
			compound:
				'Крупа кукурузная, масло растительное, ароматизатор, пшеничная мука, сухая молочная сыворотка, соль, усилители вкуса и аромата: глутамат натрия 1-замещенный, 5-гуанилат натрия 2-замещенный, 5-инозинат натрия 2-замещенный; агент желирующий - хлорид калия; сахар, вкусоароматические вещества, регулятор кислотности: лимонная кислота; краситель: экстракт паприки',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/6030f18f-4205-49f5-991c-78b083fa114e.jpg',
			gram: randomNumber(100, 200),
			kilocalories: randomNumber(500, 700),
			protein: randomNumber(15, 25),
			fats: randomNumber(30, 50),
			carbohydrates: randomNumber(40, 60),
			price: randomNumber(300, 500),
			categoryId: 1, // ID категории "Снеки"
		},
		{
			//9
			name: 'Пиколини',
			description:
				'Сырокопчёные полусухие колбаски со вкусом хамона. Коптятся на натуральных ольховых и дубовых опилках, поэтому такие ароматные.(Приготовлю при помощи рук Булата Кадиева Алевдиночива)',
			compound:
				'Свинина, мясо птицы (курица, индейка), животный белок (говяжий), нитритно-посолочная смесь (соль, фиксатор окраски нитрит натрия), пшеничные волокна, пряности и экстракты (чёрный перец, кардамон, чеснок, паприка, мацис), усилитель вкуса и аромата (глутамат натрия), стабилизатор (альгинат натрия), антиокислитель (лимонная кислота), ароматизатор, стартовые культуры. Продукция производится на предприятии где используются горчица, злаки, содержащие глютен, кунжут, орехи, сельдерей, соя, яйца',
			imageURL:
				'https://cm.samokat.ru/processed/l/public/dce2ecae3dfe8ea4_4620031247746-1.jpg',
			gram: randomNumber(100, 200),
			kilocalories: randomNumber(500, 700),
			protein: randomNumber(15, 25),
			fats: randomNumber(30, 50),
			carbohydrates: randomNumber(40, 60),
			price: randomNumber(300, 500),
			categoryId: 1, // ID категории "Снеки"
		},
		{
			//10
			name: 'Крекеры Tuc,пицца',
			description: '',
			compound:
				'Мука пшеничная, масла растительные, вода, сироп глюкозно-фруктозный, ароматизатор Пицца (вкусоароматические препараты натуральные, сыворотка сухая молочная, усилители вкуса и аромата (Е621, Е631, Е627), вкусоароматические вещества натуральные, вещество для обработки муки хлорид аммония, агенты антислёживающие (диоксид кремния аморфный, фосфаты кальция), регулятор кислотности кислота лимонная, продукт яичный), разрыхлители (гидрокарбонат аммония, гидрокарбонат натрия), соль, консервант пиросульфит натрия. Продукт может содержать следы сои и кунжута',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/322981da-36f3-4917-b4be-0ecfab44d726.jpg',
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
			//11
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
			//12
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
			//13
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
			//14
			name: 'Греческий салат',
			description: '',
			compound:
				'Огурец свежий, перец болгарский, лист салата, сыр Фетакса (сыр рассольный (молоко пастеризованное нормализованное, молокосвёртывающий ферментный препарат микробного происхождения, бактериальная закваска мезофильных и термофильных молочнокислых микроорганизмов, рассол (вода питьевая, соль), сыр полутвёрдый (молоко нормализованное пастеризованное, соль, заквасочная культура молочнокислых микроорганизмов , молокосвёртывающий ферментный препарат микробного происхождения, краситель каротины), масло сливочное (сливки пастеризованные), концентрат молочного белка (молоко обезжиренное), пахта сухая, соль пищевая, желатин пищевой, стабилизаторы (каррагинан, камедь рожкового дерева, ксантановая камедь), регулятор кислотности лимонная кислота, эмульгатор цитраты натрия, вода питьевая), масло растительное подсолнечное, масло оливковое, оливки чёрные (маслины без косточки, вода питьевая, соль пищевая, стабилизатор глюконат железа), итальянские травы (орегано, базилик, майоран, розмарин, чабер, тимьян, шалфей), петрушка сушёная, перец чёрный молотый, лимон свежий',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/b8f67b04-3728-4f52-836c-b5b1989d8af6.jpg',
			gram: randomNumber(200, 350),
			kilocalories: randomNumber(350, 600),
			protein: randomNumber(20, 30),
			fats: randomNumber(12, 22),
			carbohydrates: randomNumber(10, 20),
			price: randomNumber(400, 800),
			categoryId: 2, // ID категории "Салаты"
		},
		{
			//15
			name: 'Крабовый салат',
			description: '',
			compound:
				'Крабовые палочки, огурцы свежие, яйцо, кукуруза консервированная, майонез, соль, специи',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/fede05af-226b-4a06-9ef5-0fb67e1c4948.jpg',
			gram: randomNumber(200, 350),
			kilocalories: randomNumber(350, 600),
			protein: randomNumber(20, 30),
			fats: randomNumber(12, 22),
			carbohydrates: randomNumber(10, 20),
			price: randomNumber(400, 800),
			categoryId: 2, // ID категории "Салаты"
		},
		{
			//16
			name: 'Салат Гнездо глухаря',
			description: '',
			compound:
				'Яйца куриные варёные, майонез (масло растительное рафинированное, вода, сахар, столовый уксус, яичный желток, соль, крахмал кукурузный, стабилизатор ксантановая камедь, консервант сорбиновая кислота, горчичное эфирное масло, красители: бета-каротин, экстракт паприки), рулет куриный варёно-копчёный (мясо куриное, вода, кожа куриная, соль, клетчатка растительная, пряности натуральные и их экстракты (перец чёрный, мускат, сельдерей, чеснок), нитритно-посолочная смесь (соль, фиксатор окраски нитрит натрия), регуляторы кислотности: пирофосфаты натрия, триполифосфат натрия, ацетат натрия, цитрат натрия; сахар, сыворотка сухая молочная, усилитель вкуса и аромата — глутамат натрия 1-замещённый, глюкоза, ароматизаторы, антиокислители: аскорбат натрия, изоаскорбат натрия; красители пищевые (сахарный колер, кармин), огурец свежий, картофель Пай (картофель, масло подсолнечное рафинированное), лук пассерованный (лук репчатый, масло подсолнечное рафинированное), соль, перец чёрный молотый, консерванты: сорбат калия, бензоат натрия), регулятор кислотности ацетат натрия, антиокислитель дигидрокверцетин',
			imageURL:
				'https://cm.samokat.ru/processed/l/public/0f58b92e85a46bce_4660263400045-1.jpg',
			gram: randomNumber(200, 350),
			kilocalories: randomNumber(350, 600),
			protein: randomNumber(20, 30),
			fats: randomNumber(12, 22),
			carbohydrates: randomNumber(10, 20),
			price: randomNumber(400, 800),
			categoryId: 2, // ID категории "Салаты"
		},
		{
			//17
			name: 'Салат Грин энерджи Китфуд',
			description: '',
			compound:
				'Салат айсберг, филе куриное запечённое (филе куриной грудки, масло растительное, итальянские травы, чеснок, петрушка сушёная, соль, перец чёрный молотый), яйцо куриное, заправка (соус Ворчестер (уксус солодовый, патока, сахар, соль, кислота уксусная пищевая, ароматизатор Анчоус, паста тамаринда (мякоть тамаринда, вода, консервант бензоат натрия), лук, чеснок, корица, ароматизаторы), мёд, уксус бальзамический, масло растительное, соевый соус), шампиньоны жареные (масло растительное, соль, чеснок, перец чёрный молотый, Хондаши (соль, глутамат натрия, глюкоза, стружка тунца), оливки чёрные (оливки, соль, стабилизатор глюконат железа)',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/f62692da-78f3-4452-8eb8-af7bd65dd0fc.jpg',
			gram: randomNumber(200, 350),
			kilocalories: randomNumber(350, 600),
			protein: randomNumber(20, 30),
			fats: randomNumber(12, 22),
			carbohydrates: randomNumber(10, 20),
			price: randomNumber(400, 800),
			categoryId: 2, // ID категории "Салаты"
		},
		{
			//18
			name: 'Немецкий салат Свежеготовый',
			description: '',
			compound:
				'Картофель запечённый, колбаски охотские полукопчёные, лук красный маринованный, огурцы консервированные, грудка бескостная варёно-копчёная, карбонад копчёно-варёный, масло подсолнечное растительное, сахар, уксусная кислота, соль, зелень петрушки, чеснок, паприка, перец чёрный, куркума, консерванты (бензойная кислота, сорбиновая кислота). Продукт может содержать следы: молока, злаков, кунжута, сельдерея, горчицы, орехов, арахиса, яиц, рыбы, ракообразных, сои и продуктов их переработки',
			imageURL:
				'https://cm.samokat.ru/processed/l/original/172281_736280484.jpg',
			gram: randomNumber(200, 350),
			kilocalories: randomNumber(350, 600),
			protein: randomNumber(20, 30),
			fats: randomNumber(12, 22),
			carbohydrates: randomNumber(10, 20),
			price: randomNumber(400, 800),
			categoryId: 2, // ID категории "Салаты"
		},
		{
			//19
			name: 'Салат по-корейски',
			description: '',
			compound:
				'Уши свиные варёные: уши свиные, соль поваренная пищевая, вода питьевая, смесь специй: паприка красная, перец чёрный, перец красный, чеснок сушёный, антиокислитель аскорбиновая кислота.Корейская заправка для Хе: масло подсолнечное, соль поваренная пищевая, сахар, перец красный, чеснок, глюкоза, регуляторы кислотности уксусная кислота, лимонная кислота, кориандр, лук репчатый, перец чёрный, антиокислители (E385, E306), ароматизатор, усилитель вкуса и аромата E621, консервант (бензоат натрия)',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/9559e2c4-b998-47a2-90e7-597cadae84f5.jpg',
			gram: randomNumber(200, 350),
			kilocalories: randomNumber(350, 600),
			protein: randomNumber(20, 30),
			fats: randomNumber(12, 22),
			carbohydrates: randomNumber(10, 20),
			price: randomNumber(400, 800),
			categoryId: 2, // ID категории "Салаты"
		},
		{
			//20
			name: 'Салат Свеколка Свежеготово',
			description: 'Тёртая отварная свёкла с чесноком и майонезом.',
			compound:
				'Свёкла отварная, майонез: масло подсолнечное рафинированное дезодорированное, вода, сахар, регулятор кислотности - уксусная кислота, яичный желток, крахмал кукурузный, стабилизатор — ксантановая камедь, консервант - сорбиновая кислота, горчичное эфирное масло, красители: бета-каротин, экстракт паприки; чеснок, соль, консервант: сорбат калия, бензоат натрия; регулятор кислотности — ацетаты натрия, антиокислитель — дегидрокверцетин. Продукт может содержать следы: молока, злаков, кунжута, сельдерея, горчицы, орехов, арахиса, яиц, рыбы, ракообразных, сои и продуктов их переработки',
			imageURL:
				'https://cm.samokat.ru/processed/l/public/9388617cf92757b7_4680040913513-1.jpg',
			gram: randomNumber(200, 350),
			kilocalories: randomNumber(350, 600),
			protein: randomNumber(20, 30),
			fats: randomNumber(12, 22),
			carbohydrates: randomNumber(10, 20),
			price: randomNumber(100, 250),
			categoryId: 2, // ID категории "Салаты"
		},
		{
			//21
			name: 'Салат Министерский Самокат',
			description: '',
			compound:
				'Майонез (масло растительное рафинированное дезодорированное, вода, сахар, уксус столовый, яичный желток, соль, крахмал кукурузный, стабилизатор ксантановая камедь, консервант сорбиновая кислота, горчичное эфирное масло, красители (бета-каротин, экстракт паприки), яичный блин (вода, меланж яичный сухой, масло подсолнечное рафинированное, уксус столовый, соль), лук пассерованный (лук репчатый, масло подсолнечное рафинированное), говядина отварная, консерванты (сорбат калия, бензоат натрия), регулятор кислотности ацетаты натрия, антиокислитель дигидрокверцетин',
			imageURL:
				'https://cm.samokat.ru/processed/l/public/9388617cf92757b7_4680040913513-1.jpg',
			gram: randomNumber(200, 350),
			kilocalories: randomNumber(350, 600),
			protein: randomNumber(20, 30),
			fats: randomNumber(12, 22),
			carbohydrates: randomNumber(10, 20),
			price: randomNumber(400, 800),
			categoryId: 2, // ID категории "Салаты"
		},

		{
			//22
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
			//23
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
			//24
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
			//25
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
		{
			//26
			name: 'Энергетик Adrenaline Rush ',
			description:
				'Безалкогольный энергетик с классическим вкусом. Содержит таурин, L-карнитин, кофеин, экстракт гуараны и женьшеня, а также витамины группы B. Бодрит и тонизирует. Ещё вкуснее, если пить охлаждённым.',
			compound:
				'Вода, сахар, регуляторы кислотности: лимонная кислота, цитрат натрия 3-замещённый, орто-фосфат калия 1-замещённый; таурин, L-карнитин, ароматизаторы, антиокислитель аскорбиновая кислота, стабилизаторы: гуммиарабик, эфиры глицерина и смоляных кислот; кофеин, инозит, экстракт семян гуараны, витамины В6, В12, экстракт корня женьшеня, краситель каротины',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/58d1c829-7966-48fe-8201-b214dba5caea.jpg',
			gram: randomNumber(250, 500),
			kilocalories: randomNumber(80, 150),
			protein: randomNumber(1, 3),
			fats: randomNumber(0, 1),
			carbohydrates: randomNumber(20, 35),
			price: randomNumber(200, 400),
			categoryId: 3, // ID категории "Напитки"
		},
		{
			//27
			name: 'Напиток Самокат, яблочный шорли, с газом ',
			description:
				'Из поволжских яблок. Чистый состав: сок и вода. Упаковку можно сдать на переработку',
			compound:
				'Яблочная газировка без красителей, ароматизаторов, усилителей вкуса и консервантов. В составе всего два ингредиента: яблочный сок и артезианская вода. Безотходное производство: после отжима яблоки отдают на корм животным.',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/0775fc49-f4a8-471b-a734-cc93e838395f.jpg',
			gram: randomNumber(250, 500),
			kilocalories: randomNumber(80, 150),
			protein: randomNumber(1, 3),
			fats: randomNumber(0, 1),
			carbohydrates: randomNumber(20, 35),
			price: randomNumber(200, 400),
			categoryId: 3, // ID категории "Напитки"
		},
		{
			//28
			name: 'Минеральная вода Borjomi, с газом, в стекле ',
			description:
				'Минеральная вода снижает кислотность в организме и улучшает обмен веществ. Воду добывают из глубинных грузинских источников Боржомского ущелья. При выходе она обогащается минералами.',
			compound:
				'Природная газированная гидрокарбонатно-натриевая минеральная вода',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/e1baa845-90f2-4c26-9c3b-e222d1bc879e.jpg',
			gram: randomNumber(250, 500),
			kilocalories: randomNumber(80, 150),
			protein: randomNumber(1, 3),
			fats: randomNumber(0, 1),
			carbohydrates: randomNumber(20, 35),
			price: randomNumber(200, 400),
			categoryId: 3, // ID категории "Напитки"
		},
		{
			//29
			name: 'Напиток Черноголовка, мандарин, с газом',
			description:
				'Сильногазированный напиток со вкусом мандарина. Ещё вкуснее, если пить охлаждённым.',
			compound:
				'Вода, сахар, сироп натуральный (патока крахмальная, фруктоза, глюкоза, подсластитель сукралоза), регулятор кислотности кислота лимонная, настой цитрусовый мандариновый, ароматизаторы, стабилизаторы (гуммиарабик, эфиры глицерина и смоляных кислот), красители (жёлтый хинолиновый, красный очаровательный ac), консервант бензоат натрия',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/3a079020-aa45-4c01-9445-ee1a3350e8e1.jpg',
			gram: randomNumber(250, 500),
			kilocalories: randomNumber(80, 150),
			protein: randomNumber(1, 3),
			fats: randomNumber(0, 1),
			carbohydrates: randomNumber(20, 35),
			price: randomNumber(200, 400),
			categoryId: 3, // ID категории "Напитки"
		},
		{
			//30
			name: 'Напиток Черноголовка, мандарин, с газом',
			description:
				'Сильногазированный напиток со вкусом мандарина. Ещё вкуснее, если пить охлаждённым.',
			compound:
				'Вода, сахар, сироп натуральный (патока крахмальная, фруктоза, глюкоза, подсластитель сукралоза), регулятор кислотности кислота лимонная, настой цитрусовый мандариновый, ароматизаторы, стабилизаторы (гуммиарабик, эфиры глицерина и смоляных кислот), красители (жёлтый хинолиновый, красный очаровательный ac), консервант бензоат натрия',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/3a079020-aa45-4c01-9445-ee1a3350e8e1.jpg',
			gram: randomNumber(250, 500),
			kilocalories: randomNumber(80, 150),
			protein: randomNumber(1, 3),
			fats: randomNumber(0, 1),
			carbohydrates: randomNumber(20, 35),
			price: randomNumber(200, 400),
			categoryId: 3, // ID категории "Напитки"
		},
		{
			//31
			name: 'Напиток Lotte Milkis,банан,с газом',
			description:
				'Газированный молочный напиток со вкусом банана. Имеет нежный молочный цвет и фруктовый аромат. Обогащён витаминами и минералами. Пейте охлаждённым.',
			compound:
				'Вода, сахар, сухое молоко, диоксид углерода: Е290; фосфорная кислота, лимонная кислота: Е330; витамин А, витамин С, витамин D3',
			imageURL:
				'https://cm.samokat.ru/processed/l/public/9a148798738b6b27_8801056019914.jpg',
			gram: randomNumber(250, 500),
			kilocalories: randomNumber(80, 150),
			protein: randomNumber(1, 3),
			fats: randomNumber(0, 1),
			carbohydrates: randomNumber(20, 35),
			price: randomNumber(200, 400),
			categoryId: 3, // ID категории "Напитки"
		},
		{
			//32
			name: 'Напиток Любимый, с соком, яблоко, вишня и черешня ',
			description:
				'Напиток на основе яблочного, вишнёвого и сока черешни. Без красителей и консервантов.',
			compound:
				'Сок яблочный, сок вишнёвый, сок из чёрной моркови, сок из черешни, сахар (S)** или сахар и глюкозно-фруктозный сироп (G)**, регулятор кислотности лимонная кислота, ароматизаторы натуральные, вода. изготовлен из концентрированных соков',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/6cd7d189-4423-4db3-ba52-c4391f6badb4.jpg',
			gram: randomNumber(250, 500),
			kilocalories: randomNumber(80, 150),
			protein: randomNumber(1, 3),
			fats: randomNumber(0, 1),
			carbohydrates: randomNumber(20, 35),
			price: randomNumber(200, 400),
			categoryId: 3, // ID категории "Напитки"
		},

		// Мясо и рыба
		{
			//33
			name: 'Филе цыплёнка',
			description: 'Грудка хоп хоп белочек',
			compound: 'Филе цыпленка-бройлера',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/96f4f725-7c2f-45ad-abf5-2bf20f107377.jpg',
			gram: 900,
			kilocalories: randomNumber(80, 150),
			protein: randomNumber(1, 3),
			fats: randomNumber(0, 1),
			carbohydrates: randomNumber(20, 35),
			price: 470,
			categoryId: 4, // ID категории "Мясо и рыба"
		},
		{
			//34
			name: 'Свиной стейк',
			description:
				'Продукт категории Б — в его составе от 60 до 80% мышечной ткани. Это и есть чистое мясо без жира, хрящей и других элементов.',
			compound: 'Свинина',
			imageURL:
				'https://cm.samokat.ru/processed/l/public/baf2e9e3d7125259_93f1a6cb-159d-11ee-885e-08c0eb32014b.jpg',
			gram: 400,
			kilocalories: randomNumber(80, 150),
			protein: randomNumber(1, 3),
			fats: randomNumber(0, 1),
			carbohydrates: randomNumber(20, 35),
			price: 315,
			categoryId: 4, // ID категории "Мясо и рыба"
		},
		{
			//35
			name: 'Свиные рёбрышки',
			description:
				'Продукт категории В — в его составе от 40 до 60% мышечной ткани. Это и есть чистое мясо без жира, хрящей и других элементов.',
			compound:
				'Рёбрышки свиные, вода, соль, натуральные специи (белый и чёрный перец, лавровый лист, тимьян, мускатный орех, чили, паприка, карри, семена горчицы, лимон, лук, фенхель, кориандр), глюкоза, усилитель вкуса и аромата, глутамат натрия, регуляторы кислотности (три- и пирофосфат натрия, ацетат натрия, цитрат натрия), антиокислитель аскорбиновая кислота. Продукт может содержать следы яиц, сои, молока, горчицы, кунжута, сельдерея, злаков, содержащих глютен и продуктов их переработки',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/02390b86-e720-4bba-a978-c74e57e5a14d.jpg',
			gram: 600,
			kilocalories: randomNumber(80, 150),
			protein: randomNumber(1, 3),
			fats: randomNumber(0, 1),
			carbohydrates: randomNumber(20, 35),
			price: 239,
			categoryId: 4, // ID категории "Мясо и рыба"
		},
		{
			//36
			name: 'Говяжий стейк',
			description:
				'Продукт категории А — в его составе больше 80% мышечной ткани. Это и есть чистое мясо без жира, хрящей и других элементов.',
			compound: 'Говядина',
			imageURL:
				'https://cm.samokat.ru/processed/l/public/a0744a3d7f92e5d8_4630103114074.jpg',
			gram: 200,
			kilocalories: randomNumber(80, 150),
			protein: randomNumber(1, 3),
			fats: randomNumber(0, 1),
			carbohydrates: randomNumber(20, 35),
			price: 389,
			categoryId: 4, // ID категории "Мясо и рыба"
		},
		{
			//37
			name: 'Куриный фарш',
			description: '',
			compound: 'Филе с кожей',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/8f00376d-c9bd-4bb3-b965-e4776e99888e.jpg',
			gram: 1000,
			kilocalories: randomNumber(80, 150),
			protein: randomNumber(1, 3),
			fats: randomNumber(0, 1),
			carbohydrates: randomNumber(20, 35),
			price: 399,
			categoryId: 4, // ID категории "Мясо и рыба"
		},
		{
			//38
			name: 'Бедро цыплёнка',
			description: '',
			compound: 'Бедро цыпленка-бройлера',
			imageURL:
				'https://cm.samokat.ru/processed/l/public/baf2e9e3d7125259_93f1a6cb-159d-11ee-885e-08c0eb32014b.jpg',
			gram: 900,
			kilocalories: randomNumber(80, 150),
			protein: randomNumber(1, 3),
			fats: randomNumber(0, 1),
			carbohydrates: randomNumber(20, 35),
			price: 279,
			categoryId: 4, // ID категории "Мясо и рыба"
		},
		{
			//39
			name: 'Рулья индейки',
			description: '',
			compound:
				'Голень индейки, маринад (масло растительное, вода питьевая, соль, смесь специй: перец чили, семена укропа, кориандр, чеснок, паприка, регуляторы кислотности: ацетат натрия Е262, цитрат натрия Е331)',
			imageURL:
				'https://cm.samokat.ru/processed/l/public/45da381508e7abfb_82be96a4-6717-11ed-885b-08c0eb32014b.jpg',
			gram: 900,
			kilocalories: randomNumber(80, 150),
			protein: randomNumber(1, 3),
			fats: randomNumber(0, 1),
			carbohydrates: randomNumber(20, 35),
			price: 405,
			categoryId: 4, // ID категории "Мясо и рыба"
		},
		{
			//40
			name: 'Куриные колтлеы',
			description: '',
			compound:
				'Филе цыплят-бройлеров, кожа цыплят-бройлеров, сливочное масло, вода, кукурузная мука, пшеничная мука, пищевые волокна, молочная сыворотка, декстроза, натуральные ароматизаторы, соль, яблочный уксус, розмарин, лук, чеснок, красный перец, паприка, тмин, кориандр, чёрный перец, куркума, дрожжевой экстракт, сахар, орегано, базилик, картофельный крахмал',
			imageURL:
				'https://cm.samokat.ru/processed/l/public/baf2e9e3d7125259_93f1a6cb-159d-11ee-885e-08c0eb32014b.jpg',
			gram: 500,
			kilocalories: randomNumber(80, 150),
			protein: randomNumber(1, 3),
			fats: randomNumber(0, 1),
			carbohydrates: randomNumber(20, 35),
			price: 349,
			categoryId: 4, // ID категории "Мясо и рыба"
		},
		{
			//41
			name: 'Филе скумбрии',
			description: '',
			compound:
				'Филе скумбрии в маринаде с пряностями — лимоном, свежим укропом, чесночной пастой и чёрным молотым перцем. Запеките рыбу в духовке в течение 15-20 минут или в микроволновке — 4 минуты на полной мощности. Филе также можно пожарить на гриле.',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/662ed275-1a16-4e5d-9e05-591af1d84a18.jpg',
			gram: 250,
			kilocalories: randomNumber(80, 150),
			protein: randomNumber(1, 3),
			fats: randomNumber(0, 1),
			carbohydrates: randomNumber(20, 35),
			price: 265,
			categoryId: 4, // ID категории "Мясо и рыба"
		},
		{
			//42
			name: 'Форель Стейк',
			description: '',
			compound:
				'У стейков чистый состав — без искусственных красителей, консервантов и усилителей вкуса. Форель можно приготовить на гриле, пожарить на сковороде или запечь в духовке. Масса рыбы без глазури — 371 г.',
			imageURL:
				'https://cm.samokat.ru/processed/l/public/d8358541c8e02f19_2200257000008-1.jpg',
			gram: 390,
			kilocalories: randomNumber(80, 150),
			protein: randomNumber(1, 3),
			fats: randomNumber(0, 1),
			carbohydrates: randomNumber(20, 35),
			price: 729,
			categoryId: 4, // ID категории "Мясо и рыба"
		},
		{
			//43
			name: 'Креветки',
			description: '',
			compound:
				'Варёно-мороженые креветки среднего размера. Покрыты небольшим слоем ледяной глазури, которая сохраняет вкус и качество продукта. Можно есть как самостоятельную закуску или добавлять в салаты и вторые блюда. Масса креветок без глазури — 465 г.',
			imageURL:
				'https://cm.samokat.ru/processed/l/public/a82bea86d54618d4_4601507008191-1.jpg',
			gram: 500,
			kilocalories: randomNumber(80, 150),
			protein: randomNumber(1, 3),
			fats: randomNumber(0, 1),
			carbohydrates: randomNumber(20, 35),
			price: 599,
			categoryId: 4, // ID категории "Мясо и рыба"
		},
		// От морриса
		{
			//44
			name: 'Бейгл, с форелью и творожным сыром',
			description: '',
			compound:
				'ВИзделие хлебобулочное бейгл (мука пшеничная хлебопекарная высшего сорта, молоко питьевое с массовой долей жира 2,5%, пророщенные зерна ржи в сиропе (пророщенные зерна ржи, вода, сахарный сироп, солодовый экстракт), сахар, овсяная крупа, ядра подсолнечника, семя кунжута, семя льна, соль пищевая, закваска (высушенная закваска на основе пшеничной муки Дурум и ржаной муки, дрожжи хлебопекарные сушёные, антиокислитель аскорбиновая кислота, ферментный комплекс (ферментные препараты микробного происхождения амилолитического, протеолитического и липолитического действия)), дрожжи хлебопекарные сушёные), филе-ломтики форели радужной слабосолёной (форель радужная (произведено из мороженого сырья), соль), сыр творожный (творог (нормализованное пастеризованное молоко, бактериальная закваска, молокосвертывающий фермент микробного происхождения протеазы (ферменты из класса гидролаз)), загуститель модифицированный крахмал, соль, стабилизаторы: камедь рожкового дерева, гуаровая камедь; регулятор кислотности лимонная кислота, вода питьевая), сливки пастеризованные, огурец свежий.В продукте возможно наличие следов яиц, орехов, горчицы и продуктов их переработки. Рыба в продукте может содержать кости',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/1476961f-e4fb-402c-a53e-62af5aea3aa9.jpg',
			gram: 170,
			kilocalories: randomNumber(80, 150),
			protein: randomNumber(1, 3),
			fats: randomNumber(0, 1),
			carbohydrates: randomNumber(20, 35),
			price: 269,
			categoryId: 5, // ID категории "Мясо и рыба"
		},
		{
			//45
			name: 'Сэндвич с салатом цезарь',
			description: 'Пикантный вкус.На завтрак и для перекуса',
			compound:
				'Сэндвич на тостовом хлебе с запечённым куриным филе и свежим томатом. Для сочности добавили соус с пармезаном, как у салата цезарь. Подойдёт для завтрака или перекуса в течение дня',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/a568e4ec-8ca1-469b-b465-929690c2602b.jpg',
			gram: 170,
			kilocalories: randomNumber(80, 150),
			protein: randomNumber(1, 3),
			fats: randomNumber(0, 1),
			carbohydrates: randomNumber(20, 35),
			price: 189,
			categoryId: 5, //
		},
		{
			//46
			name: 'Соус терияки',
			description:
				'Соус для блюд японской кухни. Имеет сладковатый вкус с пикантными нотками и чесночно-имбирный аромат. Подходит для мяса, птицы, рыбы, морепродуктов и овощей.',
			compound:
				'Соевый соус (вода питьевая, соевые бобы, зерно пшеницы, соль, мальтодекстрин, краситель — сахарный колер IV), вода питьевая, глюкозно-фруктозный сироп, сахар, патока крахмальная, загуститель — крахмал кукурузный модифицированный, кислота уксусная пищевая, регулятор кислотности молочная кислота, соль, краситель — сахарный колер IV, ароматизаторы натуральные: Имбирь, Чеснок',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/c661fe06-a4e8-4d95-b611-871bf25b0a9a.jpg',
			gram: 300,
			kilocalories: randomNumber(80, 150),
			protein: randomNumber(1, 3),
			fats: randomNumber(0, 1),
			carbohydrates: randomNumber(20, 35),
			price: 129,
			categoryId: 5, //
		},
		{
			//47
			name: 'Шоколадные шарики',
			description: '',
			compound:
				'Крупа кукурузная, сахар белый, мука рисовая, патока крахмальная карамельная, какао-порошок, масло растительное дезодорированное, соль пищевая, ароматизаторы пищевые: Шоколад, Ванилин',
			imageURL:
				'https://cm.samokat.ru/processed/l/public/d95f0daeb1827543_2200724000005-1.jpg',
			gram: 222,
			kilocalories: randomNumber(80, 150),
			protein: randomNumber(1, 3),
			fats: randomNumber(0, 1),
			carbohydrates: randomNumber(20, 35),
			price: 99,
			categoryId: 5,
		},
		{
			//48
			name: 'Мидии',
			description:
				'Крупные чилийские мидии в сливочно-чесночном соусе. Уже готовы: осталось разогреть на сковороде или в сотейнике до загустения соуса, регулярно помешивая.',
			compound:
				'Мидии в створках в собственном соку, чесночный соус (подсолнечное масло, сливочное масло, пальмовое масло, чеснок, сливки, белое вино, красный болгарский перец, петрушка, антиокислители (Е306, 307))',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/1596e6bb-4e26-4414-b78d-79ecdcd0683f.jpg',
			gram: 454,
			kilocalories: randomNumber(80, 150),
			protein: randomNumber(1, 3),
			fats: randomNumber(0, 1),
			carbohydrates: randomNumber(20, 35),
			price: 450,
			categoryId: 5,
		},
		{
			//49
			name: 'Сырок творожный в молочном шоколаде, с твёрдым сыром Palermo, 23%',
			description: 'С кусочками сыра Palermo',
			compound:
				'Творог (молоко цельное, молоко восстановленное из сухого молока, масло сливочное, закваска, молокосвёртывающий ферментный препарат микробного происхождения), сахар белый, шоколад молочный (сахар, масло какао, молоко сухое цельное, какао тёртое, эмульгатор соевый лецитин, ароматизатор натуральный ваниль), сыр твёрдый Palermo (молоко нормализованное пастеризованное, соль пищевая, закваска культур молочнокислых микроорганизмов, молокосвёртывающий ферментный препарат микробного происхождения, уплотнитель хлорид кальция), масло сливочное',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/da0ec751-7965-4fa2-b663-aaf3a12b84e7.jpg',
			gram: 55,
			kilocalories: randomNumber(80, 150),
			protein: randomNumber(1, 3),
			fats: randomNumber(0, 1),
			carbohydrates: randomNumber(20, 35),
			price: 69,
			categoryId: 5,
		},
		{
			//50
			name: 'Варёная сгущёнка в вафельной трубочке',
			description:
				'Вафельная трубочка с начинкой из варёного сгущённого молока. Мягкое тесто и нежная текстура — попробуйте с горячим чаем или кофе.',
			compound:
				'Молоко сгущённое с сахаром варёное (молоко нормализованное, сахар (сахароза)); трубочка вафельная (мука пшеничная хлебопекарная, сахар, масло сливочное, меланж яичный жидкий пастеризованный охлаждённый (яйцо куриное), вода питьевая)',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/44782242-3704-4f80-97d8-10a185c5970a.jpg',
			gram: 70,
			kilocalories: randomNumber(80, 150),
			protein: randomNumber(1, 3),
			fats: randomNumber(0, 1),
			carbohydrates: randomNumber(20, 35),
			price: 55,
			categoryId: 5,
		},
		{
			//51
			name: 'Мааасдам',
			description:
				'У маасдама сладкий ореховый вкус и насыщенный аромат. Текстура — мягкая, с крупными дырочками. Уже нарезан — подойдёт для приготовления бутербродов и сэндвичей.',
			compound:
				'Молоко нормализованное пастеризованное, соль, уплотнитель хлорид кальция, молокосвёртывающий ферментный препарат животного происхождения, ферментный препарат животного происхождения лизоцим (содержит белок куриных яиц), бактериальная закваска мезофильных, термофильных молочнокислых и пропионовокислых микроорганизмов; краситель аннато, регулятор кислотности гидроксид калия, консервант нитрат натрия',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/1476961f-e4fb-402c-a53e-62af5aea3aa9.jpg',
			gram: 150,
			kilocalories: randomNumber(80, 150),
			protein: randomNumber(1, 3),
			fats: randomNumber(0, 1),
			carbohydrates: randomNumber(20, 35),
			price: 199,
			categoryId: 5,
		},
		{
			//52
			name: 'Гранатовый сок',
			description:
				'Этот и другие товары из подборки можно купить со скидкой. Добавьте их в заказ, а в корзине примените скидку в соответствующем разделе. Подробнее о правилах акции. Гранатовый сок без добавления сахара. Производится в Азербайджане по технологии прямого отжима — так в напитке сохраняются все полезные вещества.',
			compound: 'Сок гранатовый прямого отжима',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/981dbc81-f8d1-40f4-a5c6-ba3935c254f7.jpg',
			gram: 1000,
			kilocalories: randomNumber(80, 150),
			protein: randomNumber(1, 3),
			fats: randomNumber(0, 1),
			carbohydrates: randomNumber(20, 35),
			price: 399,
			categoryId: 5,
		},
		{
			//53
			name: 'Наполнитель кочачьего туалетаэ',
			description:
				'Силикагелевый наполнитель для кошачьего туалета. Имеет форму овальных гранул, которые не прилипают и не травмируют лапки животного. Быстро впитывает жидкость и блокирует неприятные запахи. Без искусственных красителей и отдушек. Экономично расходуется: уберите твёрдые отходы, добавьте наполнитель и перемешайте для равномерного распределения свежих гранул.',
			compound: 'Силикагель, краситель',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/530ab977-7f98-42a5-b740-11072ce19282.jpg',
			gram: 500,
			kilocalories: randomNumber(80, 150),
			protein: randomNumber(1, 3),
			fats: randomNumber(0, 1),
			carbohydrates: randomNumber(20, 35),
			price: 589,
			categoryId: 5,
		},
		{
			//54
			name: 'Орешки с варненой сгущенкой',
			description:
				'Знакомый с детства десерт в форме грецких орехов. Рассыпчатое тесто и начинка из варёной сгущёнки. Без искусственных красителей, ароматизаторов и усилителей вкуса.',
			compound:
				'Мука пшеничная высший сорт, маргарин (рафинированные дезодорированные масла в натуральном и модифицированном виде (пальмовое масло и его фракции, подсолнечное масло), вода питьевая, эмульгаторы (моно- и диглицериды жирных кислот, эфиры полиглицерина и жирных кислот), соль пищевая, ароматизатор Сливки-молоко, краситель каротин, регулятор кислотности лимонная кислота), молоко сгущенное варёное (молоко нормализованное, сахар (сахароза)), меланж яичный жидкий пастеризованный, инвертный сироп (сахар, вода питьевая, регулятор кислотности кислота лимонная, гидрокарбонат натрия), сахарная пудра, разрыхлитель гидрокарбонат натрия (сода пищевая), ароматизатор Ванилин, соль. Продукт может содержать следы орехов, арахиса, кунжута',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/1821d6bd-bb4e-47b4-81c0-b33b47bd9d03.jpg',
			gram: 300,
			kilocalories: randomNumber(80, 150),
			protein: randomNumber(1, 3),
			fats: randomNumber(0, 1),
			carbohydrates: randomNumber(20, 35),
			price: 235,
			categoryId: 5,
		},
		{
			//55
			name: 'Влажные салфетки',
			description:
				'Влажные салфетки бережно очищают кожу ребёнка. Экстракт ромашки в составе пропитывающего лосьона оказывает успокаивающее действие, а витамин Е — способствует увлажнению. Гипоаллергенные и не содержат спирта, поэтому можно использовать с первых дней жизни ребёнка. Удобная упаковка с пластиковым клапаном. Внутри — 120 салфеток.',
			compound: 'Нетканое полотно, пропитывающий лосьон',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/2a33e23f-88ec-4362-bb23-493c41882404.jpg',
			gram: 120,
			kilocalories: randomNumber(80, 150),
			protein: randomNumber(1, 3),
			fats: randomNumber(0, 1),
			carbohydrates: randomNumber(20, 35),
			price: 249,
			categoryId: 5,
		},
		//молочка
		{
			//56
			name: 'Молоко 2,5%',
			description: 'Пастеризованное молоко в бутылке',
			compound: 'Молоко нормализованное',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/2a33e23f-88ec-4362-bb23-493c41882404.jpg',
			gram: 930,
			kilocalories: randomNumber(80, 150),
			protein: randomNumber(1, 3),
			fats: randomNumber(0, 1),
			carbohydrates: randomNumber(20, 35),
			price: 85,
			categoryId: 6,
		},
		{
			//57
			name: 'Сметана 10%',
			description:
				'Натуральная сметана — в составе только настоящие сливки и закваска. У продукта нежная текстура, а во вкусе ощущается лёгкая кислинка. Можно добавить к сырникам, блинчикам или супу. Ещё с такой сметаной получается вкусная домашняя выпечка.',
			compound: 'Сливки нормализованные, закваска',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/a49f73ed-e534-493b-85b5-080eb1ca2663.jpg',
			gram: 300,
			kilocalories: randomNumber(80, 150),
			protein: randomNumber(1, 3),
			fats: randomNumber(0, 1),
			carbohydrates: randomNumber(20, 35),
			price: 75,
			categoryId: 6,
		},
		{
			//58
			name: 'Масло сливочное',
			description:
				'Масло готовят из пастеризованных сливок без добавления соли. В составе нет заменителей молочного жира, консервантов и усилителей вкуса.',
			compound: 'Сливки пастеризованные',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/3390a6a5-47ff-4c5e-bc11-aabedb136313.jpg',
			gram: 180,
			kilocalories: randomNumber(80, 150),
			protein: randomNumber(1, 3),
			fats: randomNumber(0, 1),
			carbohydrates: randomNumber(20, 35),
			price: 249,
			categoryId: 6,
		},
		{
			//59
			name: 'Ряженка 2,5%',
			description:
				'Натуральная ряженка из топлёного молока. В составе нет ничего лишнего — только молоко и закваска. Без красителей, ароматизаторов и усилителей вкуса.',
			compound: 'Молоко нормализованное по жиру, закваска',
			imageURL:
				'https://cm.samokat.ru/processed/l/public/039ea25bd1c9a2ea_4603736868782.jpg',
			gram: 250,
			kilocalories: randomNumber(80, 150),
			protein: randomNumber(1, 3),
			fats: randomNumber(0, 1),
			carbohydrates: randomNumber(20, 35),
			price: 55,
			categoryId: 6,
		},
		{
			//60
			name: 'Творог 2%',
			description:
				'Творог готовят из нормализованного молока с добавлением закваски. Без консервантов и ароматизаторов. Можно есть просто так, использовать для приготовления выпечки, запеканок, сырников и десертов.',
			compound:
				'A — нормализованное молоко, закваска молочнокислых культур; B — нормализованное молоко, восстановленное молоко из сухого молока, закваска молочнокислых культур',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/19729d02-f675-486f-b61a-9fb5803bee95.jpg',
			gram: 200,
			kilocalories: randomNumber(80, 150),
			protein: randomNumber(1, 3),
			fats: randomNumber(0, 1),
			carbohydrates: randomNumber(20, 35),
			price: 99,
			categoryId: 6,
		},
		{
			//61
			name: 'Сливки',
			description:
				'Стерилизованные сливки. Можно добавлять в кофе, вторые блюда и использовать для приготовления соусов. Жирность — 10%.',
			compound: 'Сливки нормализованные',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/d36d28e5-ed25-4638-96cb-a0f8f8f1f82e.jpg',
			gram: 480,
			kilocalories: randomNumber(80, 150),
			protein: randomNumber(1, 3),
			fats: randomNumber(0, 1),
			carbohydrates: randomNumber(20, 35),
			price: 189,
			categoryId: 6,
		},
		{
			//62
			name: 'Греческий йогур,вишня',
			description:
				'Греческий йогурт с кусочками вишни. Содержит мало жира и много белка. Без красителей, ароматизаторов и усилителей вкуса. Подойдёт для завтрака или перекуса.',
			compound:
				'Молоко обезжиренное, закваска, наполнитель Вишня (кусочки вишни быстрозамороженные, сахар, вода питьевая, стабилизатор пектин, регулятор кислотности лимонная кислота). Может содержать следы орехов, злаков, сельдерея',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/38e24f18-922f-4b29-bf52-25f1f7e76f54.jpg',
			gram: 140,
			kilocalories: randomNumber(80, 150),
			protein: randomNumber(1, 3),
			fats: randomNumber(0, 1),
			carbohydrates: randomNumber(20, 35),
			price: 39,
			categoryId: 6,
		},
		{
			//63
			name: 'Питьевой йогрут Чудо',
			description: '',
			compound:
				'Молоко нормализованное, молоко восстановленное В, сахар, клубника, вода, глюкозно-фруктозный сироп G, стабилизатор Е1442 H или стабилизатор Е1422 T или кукурузный крахмал X, ароматизаторы, стабилизатор пектины P, краситель кармины, регуляторы кислотности: лимонная кислота, цитрат натрия 3-замещенный; закваска',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/bab36c87-7506-4a22-8dce-954b5153f7c8.jpg',
			gram: 930,
			kilocalories: randomNumber(80, 150),
			protein: randomNumber(1, 3),
			fats: randomNumber(0, 1),
			carbohydrates: randomNumber(20, 35),
			price: 85,
			categoryId: 6,
		},
		{
			//64
			name: 'Российский сыр Самокат, 45%',
			description:
				'Сыр из коровьего молока с лёгкой кислинкой. Имеет пористую текстуру со множеством дырочек разной формы. Подойдёт для приготовления бутербродов, сэндвичей, пиццы, закусок и вторых блюд.',
			compound:
				'Молоко нормализованное, соль поваренная пищевая, уплотнитель — хлорид кальция, технологические вспомогательные средства: молокосвёртывающий ферментный препарат животного происхождения, ферментный препарат животного происхождения — лизоцим, консервант — нитрат натрия, закваска мезофильно-термофильных молочнокислых микроорганизмов, краситель пищевой: содержит пищевую добавку — краситель норбиксин. Поверхность обработана консервантом — натамицин',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/47b8e79e-5887-4f03-9e6f-86d433e61110.jfif',
			gram: 200,
			kilocalories: randomNumber(80, 150),
			protein: randomNumber(1, 3),
			fats: randomNumber(0, 1),
			carbohydrates: randomNumber(20, 35),
			price: 225,
			categoryId: 6,
		},
		{
			//65
			name: 'Тильзитер Самокат, 45% ',
			description:
				'Сыр из коровьего молока с лёгкой кислинкой. Имеет умеренно плотную текстуру с неровными дырочками и трещинами. Подойдёт для приготовления бутербродов, сэндвичей, пиццы, закусок и вторых блюд.',
			compound:
				'Молоко нормализованное, соль поваренная пищевая, уплотнитель — хлорид кальция, технологические вспомогательные средства: молокосвёртывающий ферментный препарат животного происхождения, ферментный препарат животного происхождения — лизоцим, консервант — нитрат натрия, закваска мезофильно-термофильных молочнокислых микроорганизмов, краситель пищевой: содержит пищевую добавку — краситель норбиксин. Поверхность обработана консервантом — натамицин',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/f8715fae-563a-4b6a-8802-227433529b46.jpg',
			gram: 200,
			kilocalories: randomNumber(80, 150),
			protein: randomNumber(1, 3),
			fats: randomNumber(0, 1),
			carbohydrates: randomNumber(20, 35),
			price: 215,
			categoryId: 6,
		},
		{
			//66
			name: 'Плавленый сыр Viola',
			description: '',
			compound:
				'Сыры твердые и полутвердые: содержат ферментный препарат животного происхождения — лизоцим продукт переработки яиц; вода питьевая, масло сливочное, сухое обезжиренное молоко, сухое цельное молоко, эмульгаторы E331, E339, Е339, Е450, Е452, стабилизатор — каррагинан, регулятор кислотности — лимонная кислота',
			imageURL:
				'https://cm.samokat.ru/processed/l/original/75380_1235594504.jpg',
			gram: 130,
			kilocalories: randomNumber(80, 150),
			protein: randomNumber(1, 3),
			fats: randomNumber(0, 1),
			carbohydrates: randomNumber(20, 35),
			price: 139,
			categoryId: 6,
		},
		{
			//66
			name: 'Творожный сыр',
			description:
				'Творожный сыр с нежным сливочным вкусом. Подойдёт для бутербродов, брускетт и закусок.',
			compound:
				'Творог: коровье молоко, сливки, бактериальная закваска молочнокислых микроорганизмов, молокосвёртывающий фермент микробного происхождения; сыворотка молочная, белок сывороточный, соль поваренная пищевая, лимонная кислота, вода питьевая',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/d90c5f5f-e613-439a-afbd-12eeddc857dc.jpg',
			gram: 150,
			kilocalories: randomNumber(80, 150),
			protein: randomNumber(1, 3),
			fats: randomNumber(0, 1),
			carbohydrates: randomNumber(20, 35),
			price: 175,
			categoryId: 6,
		},

		// Хлеб и выпечка
		{
			//67
			name: 'Багет Кондитьера',
			description:
				'У багета чистый состав — без консервантов, усилителей вкуса и ароматизаторов. Подойдёт для приготовления бутербродов и закусок.',
			compound:
				'Мука пшеничная высшего сорта, высушенная пшеничная закваска, дрожжи, аскорбиновая кислота, соль поваренная пищевая. Продукт может содержать следы глютена, кунжута, арахиса, молочных и яичных продуктов',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/d47d3bad-c148-4366-97de-34eb45e09ae1.jpg',
			gram: 300,
			kilocalories: randomNumber(80, 150),
			protein: randomNumber(1, 3),
			fats: randomNumber(0, 1),
			carbohydrates: randomNumber(20, 35),
			price: 66,
			categoryId: 7,
		},
		{
			//68
			name: 'Чиабатта',
			description: '',
			compound:
				'Мука пшеничная, высушеная пшеничная закваска, аскорбиновая кислота, соль повареная, дорожжи',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/d47d3bad-c148-4366-97de-34eb45e09ae1.jpg',
			gram: 200,
			kilocalories: randomNumber(80, 150),
			protein: randomNumber(1, 3),
			fats: randomNumber(0, 1),
			carbohydrates: randomNumber(20, 35),
			price: 77,
			categoryId: 7,
		},
		{
			//69
			name: 'Пшеничный хлеб',
			description: '',
			compound:
				'Мука пшеничная высшего сорта, соль, сахар, дрожжи, маргарин, улучшитель: пудра сахарная, клейковина пшеничная, соль, мука, эмульгатор солод пшеничный, аскорбиновая кислота',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/3acd94f6-4e82-4b49-abce-3e55dbc197b4.jpg',
			gram: 250,
			kilocalories: randomNumber(80, 150),
			protein: randomNumber(1, 3),
			fats: randomNumber(0, 1),
			carbohydrates: randomNumber(20, 35),
			price: 85,
			categoryId: 7,
		},
		{
			//70
			name: 'Хлеб Тостовый',
			description: 'Любимый хлеб Булата',
			compound:
				'Мука пшеничная хлебопекарная высшего сорта, вода питьевая, рафинированные, дезодорированные масла в натуральном и модифицированном виде: подсолнечное, пальмовое; вода, эмульгатор Е322, соль поваренная пищевая, регулятор кислотности лимонная кислота, соевый лецитин, сахар-песок, дрожжи хлебопекарные прессованные',
			imageURL:
				'https://cm.samokat.ru/processed/l/original/59ac97ef-9f8c-11ec-b967-08c0eb32008b_337960142.jpg',
			gram: 350,
			kilocalories: randomNumber(80, 150),
			protein: randomNumber(1, 3),
			fats: randomNumber(0, 1),
			carbohydrates: randomNumber(20, 35),
			price: 72,
			categoryId: 7,
		},
		{
			//71
			name: 'Бородинский хлеб',
			description: '',
			compound:
				'Мука ржаная обдирная, вода питьевая, мука пшеничная хлебопекарная первого сорта, мука пшеничная хлебопекарная второго сорта, солод ржаной сухой ферментированный, дрожжи хлебопекарные прессованные, соль поваренная пищевая, сахар-песок, семена тмина',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/d47d3bad-c148-4366-97de-34eb45e09ae1.jpg',
			gram: 130,
			kilocalories: randomNumber(80, 150),
			protein: randomNumber(1, 3),
			fats: randomNumber(0, 1),
			carbohydrates: randomNumber(20, 35),
			price: 32,
			categoryId: 7,
		},
		{
			//72
			name: 'Армянский лаваш',
			description: '',
			compound:
				'Мука пшеничная хлебопекарная первого сорта, вода питьевая, соль поваренная пищевая',
			imageURL:
				'https://cm.samokat.ru/processed/l/public/bb73ee68ff04d830_4607115982595-1.jpg',
			gram: 200,
			kilocalories: randomNumber(80, 150),
			protein: randomNumber(1, 3),
			fats: randomNumber(0, 1),
			carbohydrates: randomNumber(20, 35),
			price: 68,
			categoryId: 7,
		},
		{
			//73
			name: 'Круассан',
			description: '',
			compound:
				'Мука пшеничная высшего сорта, маргарин для слоёного теста (масла растительные дезодорированные, в том числе переэтерифицированное пальмовое и его фракции, подсолнечное, вода, эмульгаторы (Е471, Е475), соль, консервант сорбат калия, регулятор кислотности лимонная кислота, краситель (Е160а)), сахар, маргарин столовый (дезодорированное растительное масло в натуральном виде, и в том числе соевое, вода, эмульгаторы, эфиры полиглицерина и жирных кислот, моно- и диглицериды жирных кислот, соль, сахар, консервант сорбат калия, регулятор кислотности лимонная кислота, ароматизатор, краситель альфа токоферол), яйцо куриное, молоко сухое, дрожжи хлебопекарные, клейковина пшеничная, соль',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/2aa8907c-7d7c-4ce4-9f7d-7e8a21914d9c.jpg',
			gram: 65,
			kilocalories: randomNumber(80, 150),
			protein: randomNumber(1, 3),
			fats: randomNumber(0, 1),
			carbohydrates: randomNumber(20, 35),
			price: 87,
			categoryId: 7,
		},
		{
			//74
			name: 'Круассан с малиной и миндалем',
			description: '',
			compound:
				'Тесто (мука пшеничная высшего сорта, маргарин для слоёного теста, сахар, маргарин столовый, яйцо куриное, молоко сухое, дрожжи хлебопекарные, соль, краситель Розовый), крем (вода, сливки с м.д.ж. 33%, молоко сгущённое с м.д.ж. 8,5%, молоко сухое цельное, миндальная паста), джем малиновый, лепестки миндаля',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/5bf3ca56-f456-412d-a43f-559d0968db6d.jpg',
			gram: 110,
			kilocalories: randomNumber(80, 150),
			protein: randomNumber(1, 3),
			fats: randomNumber(0, 1),
			carbohydrates: randomNumber(20, 35),
			price: 171,
			categoryId: 7,
		},
		{
			//75
			name: 'Самса с курицей/говядиной',
			description:
				'У багета чистый состав — без консервантов, усилителей вкуса и ароматизаторов. Подойдёт для приготовления бутербродов и закусок.',
			compound:
				'Мука пшеничная высшего сорта, сахар-песок, маргарин 82% м.д.ж. (масла растительные, вода, эмульгатор (Е471), соль, ароматизатор, краситель (Е160), регулятор кислотности лимонная кислота), мясо цыплёнка-бройлера, жир куриный, говядина, меланж яичный, соль поваренная пищевая, перец чёрный молотый, лук репчатый. Продукт может содержать следы кунжута, арахиса, молочных и яичных продуктов',
			imageURL:
				'https://cm.samokat.ru/processed/l/public/9ce0e1c68b2a242b_4607039858983-1.jpg',
			gram: 110,
			kilocalories: randomNumber(80, 150),
			protein: randomNumber(1, 3),
			fats: randomNumber(0, 1),
			carbohydrates: randomNumber(20, 35),
			price: 99,
			categoryId: 7,
		},
		{
			//76
			name: 'Синаролл',
			description:
				'Сдобные булочки с корицей, покрытые творожным кремом. Подойдут для завтрака или перекуса. В упаковке — 2 штуки.',
			compound:
				'Булочка с корицей (мука пшеничная высшего сорта, молоко 2,5%, сахар, масло сливочное 82,5% (сливки пастеризованные), яйцо куриное, корица молотая, дрожжи, соль), крем (сыр творожный 65% (нормализованное пастеризованное молоко, бактериальная закваска, молокосодержащий фермент, сыры мягкие), молоко 2,5%, сахар)',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/2c3bed3b-3eee-4a37-98a8-929a59ea3eb7.jpg',
			gram: 170,
			kilocalories: randomNumber(80, 150),
			protein: randomNumber(1, 3),
			fats: randomNumber(0, 1),
			carbohydrates: randomNumber(20, 35),
			price: 225,
			categoryId: 7,
		},
		{
			//77
			name: 'Ванильный кекс с шоколадом',
			description: '',
			compound:
				'Сахар, яйцо куриное, масло растительное, мука пшеничная высшего сорта, смесь (крахмал пшеничный, мука пшеничная высшего сорта, разрыхлитель, эмульгатор, сыворотка сухая молочная, клейковина пшеничная, соль пищевая, ароматизатор Ванилин), капли горького шоколада',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/7ed22122-d5a6-4d9e-b2ec-e25064fac492.jpg',
			gram: 80,
			kilocalories: randomNumber(80, 150),
			protein: randomNumber(1, 3),
			fats: randomNumber(0, 1),
			carbohydrates: randomNumber(20, 35),
			price: 65,
			categoryId: 7,
		},

		//Овощи,грибы и зелень
		{
			//78
			name: 'Розовые томаты',
			description: '',
			compound: '',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/7ed22122-d5a6-4d9e-b2ec-e25064fac492.jpg',
			gram: 500,
			kilocalories: randomNumber(80, 150),
			protein: randomNumber(1, 3),
			fats: randomNumber(0, 1),
			carbohydrates: randomNumber(20, 35),
			price: 299,
			categoryId: 8,
		},
		{
			//79
			name: 'Томатты черри',
			description:
				'Красные томаты черри на ветке. Можно есть просто так, а можно добавить в салаты, пиццу и вторые блюда.',
			compound: '',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/30d91f22-53ec-4f69-a595-b78b86eac14a.jpg',
			gram: 250,
			kilocalories: randomNumber(80, 150),
			protein: randomNumber(1, 3),
			fats: randomNumber(0, 1),
			carbohydrates: randomNumber(20, 35),
			price: 209,
			categoryId: 8,
		},
		{
			//80
			name: 'Огурцы,короткоплодные',
			description:
				'Колючие огурцы небольшого размера. Подойдут для салатов, смузи и закусок.',
			compound: '',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/3179d472-feba-48db-ab1c-eb5c73cd5bda.jpg',
			gram: 450,
			kilocalories: randomNumber(80, 150),
			protein: randomNumber(1, 3),
			fats: randomNumber(0, 1),
			carbohydrates: randomNumber(20, 35),
			price: 159,
			categoryId: 8,
		},
		{
			//81
			name: 'Красный перец',
			description:
				'Острый красный перец. Можно добавлять в салаты, супы, вторые блюда и закуски.',
			compound: '',
			imageURL:
				'https://cm.samokat.ru/processed/l/original/170753266_1897586240.jpg',
			gram: 100,
			kilocalories: randomNumber(80, 150),
			protein: randomNumber(1, 3),
			fats: randomNumber(0, 1),
			carbohydrates: randomNumber(20, 35),
			price: 99,
			categoryId: 8,
		},
		{
			//82
			name: 'Шампиньоны',
			description:
				'Свежие шампиньоны. Уже порезаны. Подойдут для супов, вторых блюд и салатов.',
			compound: '',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/154a04f6-c557-4e59-866b-bc01f1431089.jpg',
			gram: 300,
			kilocalories: randomNumber(80, 150),
			protein: randomNumber(1, 3),
			fats: randomNumber(0, 1),
			carbohydrates: randomNumber(20, 35),
			price: 195,
			categoryId: 8,
		},
		{
			//83
			name: 'Картофель',
			description: '',
			compound: '',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/fcdd8a57-858e-411f-8f36-54e772da4202.jpg',
			gram: 5000,
			kilocalories: randomNumber(80, 150),
			protein: randomNumber(1, 3),
			fats: randomNumber(0, 1),
			carbohydrates: randomNumber(20, 35),
			price: 399,
			categoryId: 8,
		},
		{
			//84
			name: 'Белокочання капуста',
			description:
				'Белокочанная капуста. Подойдёт для варки, тушения, квашения, маринования и консервирования.',
			compound: '',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/e12b1256-c2f3-4708-a183-b3064d995139.jpg',
			gram: 800,
			kilocalories: randomNumber(80, 150),
			protein: randomNumber(1, 3),
			fats: randomNumber(0, 1),
			carbohydrates: randomNumber(20, 35),
			price: 199,
			categoryId: 8,
		},
		{
			//85
			name: 'Шпинат',
			description:
				'Свежий шпинат. Можно добавлять в салаты, вторые блюда, супы и смузи.',
			compound: '',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/1c1cdb66-88de-409d-9068-d10aee51bc5c.jpg',
			gram: 75,
			kilocalories: randomNumber(80, 150),
			protein: randomNumber(1, 3),
			fats: randomNumber(0, 1),
			carbohydrates: randomNumber(20, 35),
			price: 139,
			categoryId: 8,
		},
		{
			//86
			name: 'Зеленный лук',
			description:
				'Свежий зелёный лук. Можно добавлять в салаты, супы, вторые блюда и соусы.',
			compound: '',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/064d8862-76e8-469e-a8f5-29d9d609f03e.jpg',
			gram: 199,
			kilocalories: randomNumber(80, 150),
			protein: randomNumber(1, 3),
			fats: randomNumber(0, 1),
			carbohydrates: randomNumber(20, 35),
			price: 99,
			categoryId: 8,
		},
		{
			//87
			name: 'Морковь',
			description: '',
			compound: '',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/58d1cd50-74e0-48bf-b5a9-acc5747f8ad8.jpg',
			gram: 500,
			kilocalories: randomNumber(80, 150),
			protein: randomNumber(1, 3),
			fats: randomNumber(0, 1),
			carbohydrates: randomNumber(20, 35),
			price: 139,
			categoryId: 8,
		},
		{
			//87
			name: 'Чеснок',
			description:
				'У чеснока пикантный вкус и терпкий аромат. Сочетается с чёрным хлебом, салом, мясом, супами и соленьями.',
			compound: '',
			imageURL:
				'https://cm.samokat.ru/processed/l/original/170753228_1823193764.jpg',
			gram: 3,
			kilocalories: randomNumber(80, 150),
			protein: randomNumber(1, 3),
			fats: randomNumber(0, 1),
			carbohydrates: randomNumber(20, 35),
			price: 79,
			categoryId: 8,
		},
		{
			//88
			name: 'Лук',
			description:
				'Свежий репчатый лук. Имеет сочную мякоть и пикантный вкус с горчинкой. Подходит для салатов, супов, вторых блюд',
			compound: '',
			imageURL:
				'https://cm.samokat.ru/processed/l/original/98898_1851905937.jpg',
			gram: 500,
			kilocalories: randomNumber(80, 150),
			protein: randomNumber(1, 3),
			fats: randomNumber(0, 1),
			carbohydrates: randomNumber(20, 35),
			price: 79,
			categoryId: 8,
		},

		{
			//89
			name: 'Бананы',
			description:
				'Эти бананы мы привозим из Эквадора. У фруктов плотная кожура и сочная сладкая мякоть. Можно есть просто так, добавлять в коктейли или использовать для приготовления десертов.',
			compound: '',
			imageURL:
				'https://cm.samokat.ru/processed/l/original/98898_1851905937.jpg',
			gram: 200,
			kilocalories: randomNumber(80, 150),
			protein: randomNumber(1, 3),
			fats: randomNumber(0, 1),
			carbohydrates: randomNumber(20, 35),
			price: 149,
			categoryId: 8,
		},

		{
			//90
			name: 'Клубника',
			description: '',
			compound: '',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/3c4d32df-0e57-42ec-af01-442e8e22dab7.jpg',
			gram: 200,
			kilocalories: randomNumber(80, 150),
			protein: randomNumber(1, 3),
			fats: randomNumber(0, 1),
			carbohydrates: randomNumber(20, 35),
			price: 499,
			categoryId: 8,
		},
		{
			//91
			name: 'Яблоки',
			description:
				'Яблоки насыщенного зелёного цвета с твёрдой и сочной мякотью. Во вкусе ощущается яркая кислинка.',
			compound: '',
			imageURL:
				'https://cm.samokat.ru/processed/l/original/79755_530659854.jpg',
			gram: 500,
			kilocalories: randomNumber(80, 150),
			protein: randomNumber(1, 3),
			fats: randomNumber(0, 1),
			carbohydrates: randomNumber(20, 35),
			price: 129,
			categoryId: 8,
		},
		{
			//92
			name: 'Лимоны',
			description:
				'У лимонов ярко-выраженный кислый вкус и терпкий аромат. Можно добавлять в чай, напитки и использовать для заправки салатов.',
			compound: '',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/64388a92-6e12-4131-9d20-16251f84aa61.jpg',
			gram: 150,
			kilocalories: randomNumber(80, 150),
			protein: randomNumber(1, 3),
			fats: randomNumber(0, 1),
			carbohydrates: randomNumber(20, 35),
			price: 99,
			categoryId: 8,
		},
		{
			//93
			name: 'Кокос',
			description: 'Кокос романа семенова',
			compound: '',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/fd339215-ff6b-44fa-915e-316a876635f5.jpg',
			gram: 650,
			kilocalories: randomNumber(80, 150),
			protein: randomNumber(1, 3),
			fats: randomNumber(0, 1),
			carbohydrates: randomNumber(20, 35),
			price: 149,
			categoryId: 8,
		},

		//Бакалея
		{
			//93
			name: 'Макароны перья',
			description: 'Мука из твердой пшеницы, вода питьевая',
			compound: '',
			imageURL:
				'https://cm.samokat.ru/processed/l/public/ed3a34f991c6d32d_4607001850090.jpg',
			gram: 450,
			kilocalories: randomNumber(80, 150),
			protein: randomNumber(1, 3),
			fats: randomNumber(0, 1),
			carbohydrates: randomNumber(20, 35),
			price: 149,
			categoryId: 9,
		},
		{
			//94
			name: 'Рожки',
			description:
				'Рожки из твёрдых сортов пшеницы. Чистый состав — только мука и вода. Благодаря своей форме рожки зачерпывают соус и удерживают его внутри. Варите 11 минут.',
			compound: '',
			imageURL:
				'https://cm.samokat.ru/processed/l/public/ed3a34f991c6d32d_4607001850090.jpg',
			gram: 400,
			kilocalories: randomNumber(80, 150),
			protein: randomNumber(1, 3),
			fats: randomNumber(0, 1),
			carbohydrates: randomNumber(20, 35),
			price: 71,
			categoryId: 9,
		},
		{
			//95
			name: 'Рис пропаренный, шлифованный ',
			description:
				'Рис, обработанный паром, сохраняет много витаминов и минералов. При готовке он не разваривается. Подходит для приготовления плова, гарниров, супов и салатов. Варите 20‒25 минут.',
			compound: '',
			imageURL:
				'https://cm.samokat.ru/processed/l/public/341161124724742b_2201038000002.jpg',
			gram: 990,
			kilocalories: randomNumber(80, 150),
			protein: randomNumber(1, 3),
			fats: randomNumber(0, 1),
			carbohydrates: randomNumber(20, 35),
			price: 165,
			categoryId: 9,
		},
		{
			//96
			name: 'Гречка',
			description:
				'Гречка содержит много витаминов, микроэлементов и сложных углеводов, поэтому надолго сохраняет чувство сытости. Подойдёт для приготовления рассыпчатых гарниров и каш. Чтобы приготовить крупу, тщательно промойте её, залейте водой в соотношении 1:2 и варите после закипания 15 минут.',
			compound: '',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/7c3aeb1b-a3f6-43ae-8e18-c25c197d9229.jpg',
			gram: 900,
			kilocalories: randomNumber(80, 150),
			protein: randomNumber(1, 3),
			fats: randomNumber(0, 1),
			carbohydrates: randomNumber(20, 35),
			price: 89,
			categoryId: 9,
		},
		{
			//97
			name: 'Пшено ',
			description: 'Пшено шлифованное высший сорт',
			compound: '',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/1694424565-4680032566062.jpg',
			gram: 450,
			kilocalories: randomNumber(80, 150),
			protein: randomNumber(1, 3),
			fats: randomNumber(0, 1),
			carbohydrates: randomNumber(20, 35),
			price: 79,
			categoryId: 9,
		},
		{
			//98
			name: 'Мука',
			description:
				'Пшеничная мука из высококачественного сырья с фермерских хозяйств. Подходит для блинов, хлеба и выпечки. Продукт упакован в финскую пищевую бумагу, которую можно переработать.',
			compound: '',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/dfb67c10-3a25-43c8-86e5-78bb75fc2a63.jpg',
			gram: 450,
			kilocalories: randomNumber(80, 150),
			protein: randomNumber(1, 3),
			fats: randomNumber(0, 1),
			carbohydrates: randomNumber(20, 35),
			price: 149,
			categoryId: 9,
		},
		{
			//99
			name: 'Фунцчоза',
			description:
				'Тонкая крахмальная лапша из зелёных бобов. Приготовлена без добавления яиц. Не имеет собственного вкуса или запаха, зато отлично впитывает вкус и аромат мяса, рыбы, овощей и соусов. Можно подавать горячей и холодной.',
			compound: '',
			imageURL:
				'https://cm.samokat.ru/processed/l/public/7be17def4b6ade97_4607044607309.jpg',
			gram: 200,
			kilocalories: randomNumber(80, 150),
			protein: randomNumber(1, 3),
			fats: randomNumber(0, 1),
			carbohydrates: randomNumber(20, 35),
			price: 197,
			categoryId: 9,
		},
		{
			//100
			name: 'Тесто слоенное',
			description: '',
			compound:
				'Мука пшеничная хлебопекарная высшего сорта, вода питьевая, рафинированные дезодорированные масла в натуральном и модифицированном виде: пальмовое и его фракции, подсолнечное; эмульгаторы: моно- и диглицериды жирных кислот, эфиры полиглицерина, глицерина, диацетилвинной и жирных кислот; соль, консервант сорбат калия, краситель каротины, регулятор кислотности лимонная кислота, ароматизатор, дрожжи хлебопекарные прессованные, сахар, пшеничная клейковина, антиокислитель аскорбиновая кислота',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/72e43a58-d287-4b90-ac65-e4583e50d8a6.jpg',
			gram: 500,
			kilocalories: randomNumber(80, 150),
			protein: randomNumber(1, 3),
			fats: randomNumber(0, 1),
			carbohydrates: randomNumber(20, 35),
			price: 127,
			categoryId: 9,
		},
		{
			//101
			name: 'Гранола',
			description:
				'Натуральная гранола с банановыми чипсами, лепестками арахиса и жареным фундуком. В состав продукта входят злаки и отруби, которые запекаются при низких температурах — так они сохраняют полезные свойства. Гранола не содержит белого сахара, консервантов и красителей. Можно залить молоком, кефиром или йогуртом.',
			compound:
				'Хлопья цельнозерновые (овсяные, ячменные), патока, чипсы банановые, лепестки арахисовые, рис воздушный, отруби овсяные, масло подсолнечное, фундук жареный, какао-порошок, соль, корица, антиокислители (альфа-токоферол, аскорбиновая кислота), подсластитель сукралоза, ароматизатор натуральный',
			imageURL:
				'https://cm.samokat.ru/processed/l/original/139150_735949174.jpg',
			gram: 250,
			kilocalories: randomNumber(80, 150),
			protein: randomNumber(1, 3),
			fats: randomNumber(0, 1),
			carbohydrates: randomNumber(20, 35),
			price: 115,
			categoryId: 9,
		},
		{
			//102
			name: 'Фасоль Bonduelle',
			description:
				'Красная фасоль в пряной заливке. Можно добавить в салат или использовать в качестве гарнира.',
			compound:
				'Фасоль красная, пряная заливка: вода питьевая, сахар, соль, уксус, перец красный сладкий молотый, чесночный порошок, перец белый молотый, уплотнитель: хлорид кальция',
			imageURL:
				'https://cm.samokat.ru/processed/l/public/c68a159feb64e395_3083680009508.jpg',
			gram: 400,
			kilocalories: randomNumber(80, 150),
			protein: randomNumber(1, 3),
			fats: randomNumber(0, 1),
			carbohydrates: randomNumber(20, 35),
			price: 179,
			categoryId: 9,
		},
		{
			//103
			name: 'Паштет с лесными грибами',
			description:
				'Паштет из нута и грибов с добавлением лука, укропа и пряностей. Попробуйте с чёрным хлебом или хрустящим багетом.',
			compound:
				'Вода питьевая, нут отварной, масло растительное, грибы бланшированные, лук репчатый свежий, изолят соевого белка, крахмал модифицированный, ароматизатор Гистекс XII (дрожжевой экстракт), ароматизатор пищевой Грибы, комплексная добавка Миксгель 1090, ксантановая камедь, укроп сушёный, мускатный орех молотый. Продукт может содержать следы яичного порошка, сухого молока, горчицы, сои, злаков, орехов и продуктов их переработки',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/b20d8aed-50ee-4390-a8a3-cb39e4c7137a.jpg',
			gram: 100,
			kilocalories: randomNumber(80, 150),
			protein: randomNumber(1, 3),
			fats: randomNumber(0, 1),
			carbohydrates: randomNumber(20, 35),
			price: 129,
			categoryId: 9,
		},

		// 10 для вижнотнывх
		{
			//104
			name: 'Корм влажный Sheba Craft для кошек, слайсы, курица в соусе ',
			description:
				'Влажный корм для взрослых и стерилизованных кошек. Мясные слайсы с курицей в густом соусе. Без консервантов и усилителей вкуса.',
			compound:
				'Мясо и субпродукты (в том числе курица), продукты переработки злаков, загустители, минеральные вещества, аминокислоты (в том числе таурин), красители, витамины, сахара',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/e8e11fcc-9b96-41e0-8f80-c9c2e646680c.jpg',
			gram: 75,
			kilocalories: randomNumber(80, 150),
			protein: randomNumber(1, 3),
			fats: randomNumber(0, 1),
			carbohydrates: randomNumber(20, 35),
			price: 44,
			categoryId: 10,
		},

		{
			//105
			name: 'Сухой корм ',
			description:
				'Сухой корм с овощами, говядиной и птицей. Подходит для взрослых кошек. Содержит витамины и минералы.',
			compound:
				'Злаки и продукты их переработки, муки животного происхождения, гидролизат куриного белка, животные жиры и растительные масла (в том числе подсолнечное масло), свекловичный жом, соль, минеральные вещества, витамины, аминокислоты (в том числе таурин), красители, антиоксиданты, морковь сушёная',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/f25c8abb-0a73-4090-9400-a2579620ea5e.jpg',
			gram: 900,
			kilocalories: randomNumber(80, 150),
			protein: randomNumber(1, 3),
			fats: randomNumber(0, 1),
			carbohydrates: randomNumber(20, 35),
			price: 550,
			categoryId: 10,
		},
		{
			//106
			name: 'Корм Cesar для собак, паучи курица с зелёными овощами в соусе ',
			description:
				'Влажный корм для взрослых собак всех пород. Мясные кусочки с курицей и зелёными овощами в густом соусе. Без консервантов и усилителей вкуса.',
			compound:
				'Мясо и субпродукты, овощи, злаки, целлюлоза, витамины, минеральные вещества, продукты переработки злаков, плазма крови, овощи, минеральные вещества, витамины, свекловичный жом, загустители, метионин',
			imageURL:
				'https://cm.samokat.ru/processed/l/original/84855_1999734084.jpg',
			gram: 85,
			kilocalories: randomNumber(80, 150),
			protein: randomNumber(1, 3),
			fats: randomNumber(0, 1),
			carbohydrates: randomNumber(20, 35),
			price: 50,
			categoryId: 10,
		},
		{
			//104
			name: 'Сухой корм Pedigree, для взрослых собак всех пород, с говядиной',
			description:
				'Сухой корм с говядиной. Подходит для взрослых собак. Содержит витамины и минералы.',
			compound:
				'Кукуруза, пшеница, мука из птицы, рис, продукты животного происхождения, свекольный жом, мука говяжья, подсолнечное масло, жир животный, минеральные вещества, пивные дрожжи, витамины',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/2e974a38-bfbf-4349-be50-7eb410c61848.jpg',
			gram: 2505,
			kilocalories: randomNumber(80, 150),
			protein: randomNumber(1, 3),
			fats: randomNumber(0, 1),
			carbohydrates: randomNumber(20, 35),
			price: 550,
			categoryId: 10,
		},

		{
			//105
			name: 'Яйца',
			description: 'С0.',
			compound: '',
			imageURL:
				'https://cm.samokat.ru/processed/l/product_card/d4b91277-5024-4c9a-949e-6969c1b2ae7a.jpg',
			gram: 2505,
			kilocalories: randomNumber(80, 150),
			protein: randomNumber(1, 3),
			fats: randomNumber(0, 1),
			carbohydrates: randomNumber(20, 35),
			price: 550,
			categoryId: 6,
		},
	],

	productsInRecipeData: [
		{
			recipeId: 1,
			productId: 57,
		},
		{
			recipeId: 1,
			productId: 60,
		},
		{
			recipeId: 1,
			productId: 62,
		},
		{
			recipeId: 1,
			productId: 98,
		},
		{
			recipeId: 1,
			productId: 105,
		},
		{
			recipeId: 2,
			productId: 105,
		},
		{
			recipeId: 2,
			productId: 37,
		},
		{
			recipeId: 2,
			productId: 56,
		},
		{
			recipeId: 2,
			productId: 70,
		},
		{
			recipeId: 2,
			productId: 88,
		},
		{
			recipeId: 3,
			productId: 105,
		},
		{
			recipeId: 3,
			productId: 88,
		},
		{
			recipeId: 3,
			productId: 81,
		},
		{
			recipeId: 3,
			productId: 85,
		},
		{
			recipeId: 3,
			productId: 95,
		},
		{
			recipeId: 4,
			productId: 83,
		},
		{
			recipeId: 4,
			productId: 82,
		},
		{
			recipeId: 4,
			productId: 61,
		},
		{
			recipeId: 4,
			productId: 88,
		},
		{
			recipeId: 4,
			productId: 58,
		},
		{
			recipeId: 5,
			productId: 105,
		},
		{
			recipeId: 5,
			productId: 98,
		},
		{
			recipeId: 5,
			productId: 93,
		},
		{
			recipeId: 5,
			productId: 87,
		},
		{
			recipeId: 5,
			productId: 85,
		},
	],
}
//САМОЕ ГЛАВНОЕ - ПРОДУКТЫ КОТОРЫЕ ЕСТЬ РАНДОМНО СТАВЯТ ЦЕНЫ УБИРАЙ ЭТО НАхУЙ
