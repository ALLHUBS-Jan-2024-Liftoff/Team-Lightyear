INSERT IGNORE INTO category
VALUES
(1, 081224, 'Coffee'),
(2, 081224, "Food"),
(3, 081224, "Paper Products"),
(4, 081224, "Miscellaneous");


INSERT IGNORE INTO item
VALUES
(1, 23, 5.99, 55, "Espresso Beans", "Dark and tasty", "Shelf 1A", "Get more"),
(1, 12, 12.99, 10, "Highlander Grog Beans", "There can only be one...", "Shelf 1A", "Get lots more"),
(1, 13, 15.99, 8, "Hazelnut Beans", "Robust with a nutty finish.", "Shelf 1A", "Even more!"),
(2, 14, 15.99, 15, "Cinnamon Rolls", "A sweet staple.", "Shelf 2A", "Yum!"),
(2, 15, 24.99, 18, "Strawberry Scones", "There is fruit in it so it HAS to be healthy", "Shelf 2A", "Tasty!"),
(3, 16, 24.99, 20, "Straws", "500 count", "Shelf 3A", "Get your straw!"),
(3, 17, 19.99, 30, "Spoons", "300 count", "Shelf 3A", "Soup time!"),
(4, 18, 12.99, 4, "Clorox Wipes", "Keep it clean", "Shelf 4A", "Squeeky clean"),
(4, 19, 20.99, 8, "Light Bulbs", "Keep it bright", "Shelf 4A", "Brighten things up");


INSERT IGNORE INTO account
VALUES
(1, 0, "cars", "mike@aol.com", "Mike", "Myers"),
(2, 0, "boats", "chris@aol.com", "Chris", "Farley"),
(3, 0, "motorcycles", "will@aol.com", "Will", "Ferrell"),
(4, 1, "bicycles", "chevy@aol.com", "Chevy", "Chase");

INSERT IGNORE INTO invoice
VALUES
(8, 240812, 105, "Java Time"),
(9, 240812, 159, "The Coffee Friends"),
(10, 240812, 250, "Beans On Demand"),
(11, 240812, 490, "Half & Half Priced Warehouse");