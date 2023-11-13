CREATE TABLE products (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  description TEXT,
  price REAL,
  size TEXT,
  weight REAL,
  image TEXT
);

INSERT INTO products (name, description, price, size, weight, image) VALUES
('Apfel', 'Ein knackiger, saftiger grüner Apfel, ideal für einen gesunden Snack zwischendurch. Reich an Vitaminen und Mineralien, perfekt für einen Fruchtsalat oder als Beilage im Müsli.', 0.99, '8cm x 8cm x 8cm', 0.15, 'apfel.jpg'),
('Brot', 'Vollkornbrot mit einer kräftigen Kruste und weicher Mitte. Hergestellt aus hochwertigem Vollkornmehl. Ideal für Sandwiches oder als Beilage zu Suppen.', 2.50, '30cm x 15cm x 10cm', 0.5, 'brot.jpg'),
('Käse', 'Reichhaltiger und cremiger Cheddar-Käse mit einem kräftigen Geschmack. Perfekt für Käseplatten, Sandwiches oder zum Überbacken von Gerichten.', 3.99, '10cm x 10cm x 2cm', 0.2, 'kaese.jpg'),
('Milch', 'Frische Vollmilch von lokalen Bauernhöfen. Ein täglicher Begleiter für Kaffee, Müsli oder zum Kochen und Backen.', 1.20, '9cm x 9cm x 25cm', 1.0, 'milch.jpg'),
('Tomaten', 'Frische Bio Cherry Tomaten, sonnengereift und voller Geschmack. Ideal für Salate, als Snack oder in Pasta-Gerichten.', 2.99, '3cm x 3cm x 3cm', 0.3, 'tomaten.jpg'),
('Salat', 'Frischer grüner Blattsalat, perfekt als Basis für Salate oder als Beilage. Knackig und voller Nährstoffe.', 1.99, '30cm x 30cm x 15cm', 0.25, 'salat.jpg'),
('Hähnchen', 'Bio-Hähnchenbrust von freilaufenden Hühnern. Zart und saftig, ideal für Grillgerichte, Salate oder in asiatischen Gerichten.', 4.50, '15cm x 10cm x 5cm', 0.4, 'haehnchen.jpg'),
('Orangensaft', 'Frisch gepresster Orangensaft, reich an Vitamin C. Keine zugesetzten Zucker oder Konservierungsstoffe. Ein erfrischender Start in den Tag.', 3.00, '9cm x 9cm x 24cm', 1.0, 'orangensaft.jpg'),
('Schokolade', 'Feinste Milchschokolade, cremig und reich an Kakao. Der perfekte Genuss für Schokoladenliebhaber.', 1.50, '15cm x 7cm x 1cm', 0.1, 'schokolade.jpg'),
('Joghurt', 'Natürlicher Joghurt ohne zugesetzten Zucker. Perfekt zum Frühstück, als Basis für Smoothies oder mit frischen Früchten.', 0.80, '9cm x 9cm x 10cm', 0.25, 'joghurt.jpg'),
('Pasta', 'Italienische Spaghetti aus Hartweizengrieß, ideal für eine Vielzahl von Pasta-Gerichten. Perfekt al dente zu kochen, bietet sie die ideale Grundlage für traditionelle italienische Saucen.', 1.99, '30cm x 5cm x 5cm', 0.5, 'pasta.jpg'),
('Reis', 'Feinster Basmati Reis, bekannt für sein aromatisches und zartes Korn. Ideal als Beilage für asiatische und indische Gerichte. Kocht locker und duftend.', 2.99, '22cm x 15cm x 5cm', 1.0, 'reis.jpg'),
('Eier', 'Frische Freiland Eier, reich an Proteinen und ideal für das Frühstück oder zum Backen. Stammen von Hühnern, die artgerecht gehalten werden.', 2.50, '15cm x 10cm x 7cm', 0.6, 'eier.jpg'),
('Gurke', 'Knackige Salatgurke, ideal für frische Salate oder als gesunder Snack zwischendurch. Enthält wichtige Nährstoffe und viel Wasser.', 0.99, '25cm x 5cm x 5cm', 0.3, 'gurke.jpg'),
('Kaffee', 'Aromatischer Röstkaffee aus hochwertigen Kaffeebohnen. Bietet ein tiefes und reichhaltiges Aroma, ideal für den perfekten Start in den Tag.', 5.99, '20cm x 10cm x 5cm', 0.5, 'kaffee.jpg'),
('Tee', 'Erlesener Grüner Tee, bekannt für sein feines Aroma und seine gesundheitlichen Vorteile. Ideal für eine entspannende Auszeit.', 3.50, '10cm x 10cm x 5cm', 0.1, 'tee.jpg'),
('Zucker', 'Natürlicher weißer Zucker, ideal zum Süßen von Getränken, Backwaren und Desserts. Ein unverzichtbarer Bestandteil in jeder Küche.', 1.99, '18cm x 12cm x 3cm', 1.0, 'zucker.jpg'),
('Salz', 'Reines Meersalz, perfekt zum Würzen aller Arten von Gerichten. Ein Grundnahrungsmittel, das in keiner Küche fehlen sollte.', 0.50, '15cm x 10cm x 5cm', 0.5, 'salz.jpg'),
('Pfeffer', 'Schwarzer Pfeffer, bietet eine pikante Würze, die Gerichten eine feine Schärfe verleiht. Ideal für Fleischgerichte, Saucen und Marinaden.', 3.99, '10cm x 10cm x 5cm', 0.1, 'pfeffer.jpg'),
('Olivenöl', 'Hochwertiges extra natives Olivenöl, kaltgepresst mit einem fruchtigen und leicht würzigen Geschmack. Ideal für Salatdressings, zum Kochen oder als Dip.', 7.99, '25cm x 8cm x 8cm', 0.5, 'olivenoel.jpg');

CREATE TABLE carts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  status TEXT,
  firstname TEXT,
  lastname TEXT,
  street TEXT,
  zip TEXT,
  city TEXT,
  country TEXT
);

CREATE TABLE cart_products (
  cart_id INTEGER,
  product_id INTEGER,
  amount INTEGER,
  PRIMARY KEY (cart_id, product_id),
  FOREIGN KEY (cart_id) REFERENCES carts(id) ON DELETE CASCADE,
  FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);
