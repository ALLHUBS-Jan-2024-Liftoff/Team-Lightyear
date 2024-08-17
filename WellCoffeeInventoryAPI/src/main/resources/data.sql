INSERT IGNORE INTO category
VALUES
-- Fields:
-- (id, date, name)
(1, 081224, "Coffee"),
(2, 081224, "Food"),
(3, 081224, "Paper Products"),
(4, 081224, "Miscellaneous");


INSERT IGNORE INTO item
VALUES
-- Fields:
-- (category_id, id, minQuantity, price, quantity, name, description, location)
(1, 1, 23, 5.99, 55, "Espresso Beans", "Dark and tasty", "Shelf 1A"),
(1, 2, 12, 12.99, 10, "Highlander Grog Beans", "There can only be one...", "Shelf 1A"),
(1, 3, 13, 15.99, 8, "Hazelnut Beans", "Robust with a nutty finish.", "Shelf 1A"),
(2, 4, 14, 15.99, 15, "Cinnamon Rolls", "A sweet staple.", "Shelf 2A"),
(2, 5, 15, 24.99, 18, "Strawberry Scones", "There is fruit in it so it HAS to be healthy", "Shelf
2A"),
(3, 6, 16, 24.99, 20, "Straws", "500 count", "Shelf 3A"),
(3, 7, 17, 19.99, 30, "Spoons", "300 count", "Shelf 3A"),
(4, 8, 18, 12.99, 4, "Clorox Wipes", "Keep it clean", "Shelf 4A"),
(4, 9, 19, 20.99, 8, "Light Bulbs", "Keep it bright", "Shelf 4A");

INSERT IGNORE INTO account
VALUES
(1, 0, "cars", "mike@aol.com", "Mike", "Myers"),
(2, 0, "boats", "chris@aol.com", "Chris", "Farley"),
(3, 0, "motorcycles", "will@aol.com", "Will", "Ferrell"),
(4, 1, "bicycles", "chevy@aol.com", "Chevy", "Chase");

INSERT IGNORE INTO invoice
VALUES
-- Fields:
--(id, date, invNumber, vendor)
(1, 240812, 105, "Java Time"),
(2, 240812, 159, "The Coffee Friends");
--(3, 240812, 250, "Beans On Demand"),
--(4, 240812, 490, "Half & Half Priced Warehouse");

INSERT IGNORE INTO invoice_item
VALUES
-- Fields:
--(invoice_id, item_id)
(1,1),
(1,2),
(1,6),
(2,2),
(2,4);

INSERT IGNORE INTO ordered_item
VALUES
-- Fields:
--(id, invoice_id, item_cost, item_id, quantityOrdered)
(1,1,5.99,1,4),
(2,1,12.99,2,2),
(3,1,24.99,6,9),
(4,2,12.99,2,8),
(5,2,15.99,4,1);