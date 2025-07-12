import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Gem" size={32} className="text-yellow-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  ЮвелиРКа.рф
                </h1>
                <p className="text-sm text-gray-600">
                  Сеть ювелирных мастерских в Минусинске и Абакане
                </p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="text-gray-700 hover:text-yellow-600 transition-colors"
              >
                Главная
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-yellow-600 transition-colors"
              >
                О компании
              </a>
              <a
                href="#catalog"
                className="text-gray-700 hover:text-yellow-600 transition-colors"
              >
                Каталог
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-yellow-600 transition-colors"
              >
                Услуги
              </a>
              <a
                href="#delivery"
                className="text-gray-700 hover:text-yellow-600 transition-colors"
              >
                Доставка
              </a>
              <a
                href="#contacts"
                className="text-gray-700 hover:text-yellow-600 transition-colors"
              >
                Контакты
              </a>
            </nav>
            <Button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white">
              Консультация
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="py-20 bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                Эксклюзивные украшения
                <br />
                <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                  премиум класса
                </span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl lg:max-w-none">
                Создаём украшения высочайшего качества с 1985 года.
                Индивидуальный подход, безупречное мастерство, пожизненные
                гарантии.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white"
                >
                  Посмотреть каталог
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                  Индивидуальный заказ
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-yellow-50 to-white p-8">
                <img
                  src="https://cdn.poehali.dev/files/4ec7dfe7-172f-4c67-86fe-abe3146e4edb.jpg"
                  alt="Роскошное золотое украшение с драгоценными камнями"
                  className="w-full h-auto object-contain max-h-96 mx-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent rounded-2xl"></div>
              </div>

              {/* Декоративные элементы */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-yellow-500 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl font-bold text-gray-900 mb-8">
              О компании
            </h3>
            <p className="text-lg text-gray-600 mb-12">
              На рынке более 25 лет. Большой опыт в изготовлении ювелирных
              изделий и ремонты любой сложности. Каждое изделие проходит строгий
              контроль качества.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" size={32} className="text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  25+ лет опыта
                </h4>
                <p className="text-gray-600">
                  Изготовление ювелирных изделий и ремонты любой сложности
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Wrench" size={32} className="text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  Ремонт любой сложности
                </h4>
                <p className="text-gray-600">
                  Восстановление и реставрация ювелирных изделий
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Star" size={32} className="text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  Высокое качество
                </h4>
                <p className="text-gray-600">
                  Каждое украшение создается с особым вниманием к деталям
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-gray-900 text-center mb-12">
            Каталог украшений
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Кольца",
                description: "Обручальные и помолвочные кольца",
                icon: "Circle",
              },
              {
                title: "Серьги",
                description: "Классические и авангардные модели",
                icon: "Sparkles",
              },
              {
                title: "Браслеты",
                description: "Элегантные браслеты всех стилей",
                icon: "Link",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300 border border-gray-200"
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon
                      name={item.icon as any}
                      size={32}
                      className="text-white"
                    />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button
                    variant="outline"
                    className="border-yellow-500 text-yellow-600 hover:bg-yellow-50"
                  >
                    Смотреть коллекцию
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-gray-900 text-center mb-12">
            Наши услуги
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Индивидуальный заказ",
                description:
                  "Создание уникальных украшений по вашему эскизу или идее",
                icon: "Palette",
              },
              {
                title: "Гравировка",
                description:
                  "Персонализация украшений с помощью лазерной гравировки",
                icon: "Type",
              },
              {
                title: "Ремонт изделий",
                description:
                  "Профессиональная реставрация и ремонт ювелирных украшений",
                icon: "Wrench",
              },
              {
                title: "Чистка украшений",
                description:
                  "Деликатная чистка и полировка драгоценных металлов",
                icon: "Sparkles",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon
                      name={service.icon as any}
                      size={32}
                      className="text-white"
                    />
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-yellow-500 text-yellow-600 hover:bg-yellow-50"
                  >
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Section */}
      <section id="delivery" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold text-gray-900 text-center mb-12">
              Доставка и гарантии
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <Icon
                    name="Truck"
                    size={24}
                    className="text-yellow-600 mr-3"
                  />
                  <h4 className="text-xl font-semibold text-gray-900">
                    Доставка
                  </h4>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li>• Бесплатная доставка по Москве</li>
                  <li>• Курьерская доставка по России</li>
                  <li>• Застрахованная доставка</li>
                  <li>• Возможность примерки на дому</li>
                </ul>
              </Card>

              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <Icon
                    name="Shield"
                    size={24}
                    className="text-yellow-600 mr-3"
                  />
                  <h4 className="text-xl font-semibold text-gray-900">
                    Гарантии
                  </h4>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li>• Сертификат подлинности</li>
                  <li>• Пожизненная гарантия на изделия</li>
                  <li>• Возврат в течение 30 дней</li>
                  <li>• Бесплатное сервисное обслуживание</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-gray-900 text-center mb-12">
            Контакты
          </h3>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-2xl font-semibold text-gray-900 mb-6">
                Свяжитесь с нами
              </h4>

              <div className="space-y-4">
                <div className="flex items-center">
                  <Icon
                    name="Phone"
                    size={20}
                    className="text-yellow-600 mr-3"
                  />
                  <span className="text-gray-700">+7 (913) 519-34-32</span>
                </div>

                <div className="flex items-center">
                  <Icon
                    name="MapPin"
                    size={20}
                    className="text-yellow-600 mr-3"
                  />
                  <span className="text-gray-700">
                    Абакан, ул. Тараса Шевченко, 59, магазин "Изумруд"
                  </span>
                </div>

                <div className="flex items-center">
                  <Icon
                    name="Clock"
                    size={20}
                    className="text-yellow-600 mr-3"
                  />
                  <span className="text-gray-700">
                    Пн-Пт: 10:00-20:00, Сб-Вс: 11:00-18:00
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-2xl font-semibold text-gray-900 mb-6">
                Записаться на консультацию
              </h4>
              <p className="text-gray-600 mb-6">
                Приходите в наш шоу-рум для личной консультации и просмотра
                коллекций
              </p>
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white"
              >
                Записаться на встречу
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Icon name="Gem" size={32} className="text-yellow-500" />
              <h1 className="text-2xl font-bold">ЮвелиРКа.рф</h1>
            </div>
            <p className="text-gray-400 mb-4">
              ЮвелиРКа.рф — сеть ювелирных мастерских в Минусинске и Абакане
            </p>
            <p className="text-gray-500 text-sm">
              © 2024 ЮвелиРКа.рф. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
