insert into members (first_name, last_name, date_enrolled, renewal_date, membership_type, membership_status, current_member) 
values ('Pilar', 'Barker', Now(), Now(), 1, TRUE, TRUE),
        ('Greg', 'Bowman', Now(), Now(), 1, TRUE, TRUE),
        ('Liz', 'Bowman', Now(), Now(), 2, TRUE, FALSE),
        ('Jeremy', 'May', Now(), Now(), 3, TRUE, TRUE);


insert into membership_typs (name, amount, perks, onspecial)
Values ('trial', 0.0, 'free week with total use of facility', FALSE),
       ('standard', 20.0, 'total use of facility with free parking', TRUE),
       ('silver', 35.0, 'total use of facility plus discounts on purchases over $50', FALSE),
       ('gold', 42.0, 'you get it all and free massages twice a month', TRUE),
       ('platinum', 55.0, 'unlimited massages and unlimited tanning', FALSE);