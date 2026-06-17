DROP TABLE IF EXISTS `phrases`;

DROP TABLE IF EXISTS `languages`;

DROP TABLE IF EXISTS `settings`;

CREATE TABLE `languages` (`id` SERIAL, `name` VARCHAR(255) NOT NULL);

CREATE TABLE `settings` (`id` SERIAL, `name` VARCHAR(255) NOT NULL);

CREATE TABLE `phrases` (
  `id` SERIAL,
  `english_text` VARCHAR(255) NOT NULL,
  `translated_text` VARCHAR(255) NOT NULL,
  `language_id` BIGINT UNSIGNED NOT NULL,
  `setting_id` BIGINT UNSIGNED NOT NULL,
  `speaker` INT NOT NULL ,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`language_id`) REFERENCES `languages` (`id`) 
  	ON UPDATE CASCADE 
  	ON DELETE CASCADE,
  FOREIGN KEY (`setting_id`) REFERENCES `settings` (`id`) 
  	ON UPDATE CASCADE 
  	ON DELETE CASCADE
);


-- Insert into Languages table
INSERT INTO languages (id, name) VALUES
(1, 'German'),
(2, 'Spanish'),
(3, 'French');

-- Insert into Settings table
INSERT INTO settings (id, name) VALUES
(1, 'Cafe'),
(2, 'Restaurant'),
(3, 'Airport');

-- Insert into Phrases table (Mixing up languages and settings)
INSERT INTO phrases (id, english_text, translated_text, language_id, setting_id, speaker) VALUES
(1, 'Hello, can I have a coffee?', 'Hola, ¿puedo tomar un café?', 2, 1, 2),
(2, 'Where is the restroom?', 'Où sont les toilettes?', 3, 2, 2),
(3, 'I need a ticket to Berlin.', 'Ich brauche ein Ticket nach Berlin.', 1, 3, 2),
(4, 'How much does this cost?', '¿Cuánto cuesta esto?', 2, 1, 1),
(5, 'Do you have a reservation?', 'Avez-vous une réservation?', 3, 2, 1),
(6, 'Do you need help?', 'Brauchen Sie Hilfe?', 1, 3, 1),
(7, 'Do you speak English?', '¿Hablas inglés?', 2, 1, 2),
(8, 'I would like to order a meal.', 'Je voudrais commander un repas.', 3, 2, 2),
(9, 'Can I exchange money here?', 'Kann ich hier Geld wechseln?', 1, 3, 2),
(10, 'What time does the café open?', '¿A qué hora abre la cafetería?', 2, 1, 1),
(11, 'Here is a menu', 'Voici un menu', 3, 2, 1),
(12, 'Where is my gate?', 'Wo ist mein Gate?', 1, 3, 2),
(13, 'Do you have fresh pastries?', '¿Tienen pasteles frescos?', 2, 1, 2),
(14, 'Do you have your passport?', 'As-tu ton passeport', 3, 3, 1),
(15, 'I would like a table for two.', 'Einen Tisch für zwei, bitte', 1, 2, 2),
(16, 'Are you paying with credit card?', '¿Pagarás con tarjeta de crédito?', 2, 1, 1),
(17, 'What is the WiFi password?', 'Quel est le mot de passe WiFi?', 3, 2, 2),
(18, 'I need a taxi to the airport.', 'Ich brauche ein Taxi zum Flughafen.', 1, 3, 2),
(19, 'Would you like some water.', '¿Quieres un poco de agua?', 2, 2, 1),
(20, 'Where is the baggage claim?', 'Où est la récupération des bagages?', 3, 3, 2),
(21, 'Do you have vegetarian options?', 'Haben Sie vegetarische Optionen?', 1, 2, 2),
(22, 'Can I sit by the window?', '¿Puedo sentarme junto a la ventana?', 2, 1, 2),
(23, 'Excuse me, I need assistance.', 'Excusez-moi, j\'ai besoin d\'aide.', 3, 3, 2),
(24, 'Is this seat taken?', 'Ist dieser Platz besetzt?', 1, 1, 2),
(25, 'Would you like milk with your coffee?', '¿Quieres leche con tu café?', 2, 1, 1),
(26, 'How long is the flight delayed?', 'Combien de temps le vol est-il retardé?', 3, 3, 2),
(27, 'Would you like an extra napkin?', 'Möchten sie eine zusätzliche Serviette?', 1, 2, 1),
(28, 'Do you have decaf coffee?', '¿Tienen café descafeinado?', 2, 1, 2),
(29, 'What are today\'s specials?', 'Quels sont les plats du jour?', 3, 2, 2),
(30, 'Please go to gate 105', 'Bitte gehen Sie zum Tor 105', 1, 3, 1),
(31, 'Would you like a coffee?', 'Möchten Sie einen Kaffee?', 1, 2, 1);
