
CREATE EXTENSION IF NOT EXISTS "uuid-ossp"; 

-- Table: public.users

CREATE TABLE IF NOT EXISTS public.users
(
    id uuid NOT NULL DEFAULT uuid_generate_v4(),
    name character varying(40) COLLATE pg_catalog."default",
    user_name character varying(40) COLLATE pg_catalog."default",
    email character varying(40) COLLATE pg_catalog."default",
    phone character varying(40) COLLATE pg_catalog."default",
    company_name character varying(40) COLLATE pg_catalog."default",
    created_datetime timestamp without time zone NOT NULL DEFAULT now(),
    updated_datetime timestamp without time zone NOT NULL DEFAULT now(),
    CONSTRAINT users_pkey PRIMARY KEY (id)
);


ALTER TABLE public.users OWNER to postgres;