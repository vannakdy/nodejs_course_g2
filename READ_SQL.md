
- install server xampp or wampp
- Create database name nodejs_g2
- Create table
    customer
        columns
        - id 
        - firstname
        - lastname
        - gender
        - dob
        - tel
        - address_id
        
*** SQL Structure Query Language
- INSERT INTO
    -- insert one row
    INSERT INTO `customer` (`firstname`, `lastname`, `gender`, `dob`, `tel`, `address_id`) VALUES ('Sok','Koko','0','2000-10-11','09988888888','1')

    -- Case insert multiple row
    INSERT INTO `customer` 
    (`firstname`, `lastname`, `gender`, `dob`, `tel`, `address_id`) VALUES 
    ('Sa','Somnang',0,'2000-10-12','099888888',2),
    ('Do','Dara',0,'2000-10-12','099888888',2),
    ('Mo','Mora',0,'2000-10-12','099888888',2),
    ('Ko','Rako',0,'2000-10-12','099888888',2),
    ('Ro','Bora',0,'2000-10-12','099888888',2)

- SELECT 
    
    SELECT * FROM `customer`

    SELECT id, firstname , lastname , gender FROM `customer` 

- WHERE

    SELECT * FROM `customer` WHERE gender = 0

    SELECT * FROM `customer` WHERE gender = 0 AND address_id = 1

    SELECT * FROM `customer` WHERE gender = 0 OR address_id = 1

- ORDER BY
    - ASC (Default) / DESC

    SELECT id , firstname , lastname  , gender , address_id
    FROM customer  
    WHERE gender = 0 AND address_id = 2
    ORDER BY id DESC