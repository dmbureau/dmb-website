CREATE TABLE `enquiries` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`company` text NOT NULL,
	`website` text DEFAULT '' NOT NULL,
	`market` text NOT NULL,
	`industry` text DEFAULT '' NOT NULL,
	`service` text DEFAULT '' NOT NULL,
	`package` text DEFAULT '' NOT NULL,
	`budget` text DEFAULT '' NOT NULL,
	`problem` text NOT NULL,
	`created_at` integer NOT NULL
);
