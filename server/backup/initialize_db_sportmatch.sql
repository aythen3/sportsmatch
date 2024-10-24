PGDMP  
                    |            db_sportmatch    16.3    16.3 Z    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16387    db_sportmatch    DATABASE     �   CREATE DATABASE db_sportmatch WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LC_COLLATE = 'C' LC_CTYPE = 'en';
    DROP DATABASE db_sportmatch;
                postgres    false                        3079    16388 	   uuid-ossp 	   EXTENSION     ?   CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;
    DROP EXTENSION "uuid-ossp";
                   false            �           0    0    EXTENSION "uuid-ossp"    COMMENT     W   COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';
                        false    2            u           1247    16509    sportman_type_enum    TYPE     ]   CREATE TYPE public.sportman_type_enum AS ENUM (
    'player',
    'coach',
    'invitado'
);
 %   DROP TYPE public.sportman_type_enum;
       public          postgres    false            �           1247    16591    user_type_enum    TYPE     Z   CREATE TYPE public.user_type_enum AS ENUM (
    'sportman',
    'club',
    'invitado'
);
 !   DROP TYPE public.user_type_enum;
       public          postgres    false            �            1259    16542    club    TABLE     �  CREATE TABLE public.club (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    is_delete boolean DEFAULT false NOT NULL,
    name character varying NOT NULL,
    city character varying NOT NULL,
    country character varying NOT NULL,
    field character varying NOT NULL,
    sport character varying,
    year integer NOT NULL,
    capacity integer NOT NULL,
    description character varying,
    img_perfil character varying,
    img_front character varying,
    prop1 json,
    prop2 json,
    prop3 text,
    prop4 text,
    user_id uuid
);
    DROP TABLE public.club;
       public         heap    postgres    false    2            �            1259    16673    club_matches_match    TABLE     b   CREATE TABLE public.club_matches_match (
    club_id uuid NOT NULL,
    match_id uuid NOT NULL
);
 &   DROP TABLE public.club_matches_match;
       public         heap    postgres    false            �            1259    16568    comment    TABLE     �  CREATE TABLE public.comment (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    is_delete boolean DEFAULT false NOT NULL,
    content character varying NOT NULL,
    prop1 json,
    prop2 json,
    prop3 text,
    prop4 text,
    author_id uuid,
    post_id uuid
);
    DROP TABLE public.comment;
       public         heap    postgres    false    2            �            1259    16579    like    TABLE     s  CREATE TABLE public."like" (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    is_delete boolean DEFAULT false NOT NULL,
    prop1 json,
    prop2 json,
    prop3 text,
    prop4 text,
    author_id uuid,
    post_id uuid
);
    DROP TABLE public."like";
       public         heap    postgres    false    2            �            1259    16531    match    TABLE     �  CREATE TABLE public.match (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    is_delete boolean DEFAULT false NOT NULL,
    status character varying,
    prop1 json,
    prop2 json,
    prop3 text,
    prop4 text,
    offer_id_id uuid
);
    DROP TABLE public.match;
       public         heap    postgres    false    2            �            1259    16666    match_club_id_club    TABLE     b   CREATE TABLE public.match_club_id_club (
    match_id uuid NOT NULL,
    club_id uuid NOT NULL
);
 &   DROP TABLE public.match_club_id_club;
       public         heap    postgres    false            �            1259    16659    match_sportmen_id_sportman    TABLE     n   CREATE TABLE public.match_sportmen_id_sportman (
    match_id uuid NOT NULL,
    sportman_id uuid NOT NULL
);
 .   DROP TABLE public.match_sportmen_id_sportman;
       public         heap    postgres    false            �            1259    16640    message    TABLE     W  CREATE TABLE public.message (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    is_delete boolean DEFAULT false NOT NULL,
    sender_id character varying NOT NULL,
    receiver_id character varying NOT NULL,
    room character varying NOT NULL,
    message character varying NOT NULL,
    is_readed boolean DEFAULT false NOT NULL,
    sender_delete boolean,
    receiver_delete boolean,
    prop1 json,
    prop2 json,
    prop3 text,
    prop4 text
);
    DROP TABLE public.message;
       public         heap    postgres    false    2            �            1259    16454 
   migrations    TABLE     �   CREATE TABLE public.migrations (
    id integer NOT NULL,
    "timestamp" bigint NOT NULL,
    name character varying NOT NULL
);
    DROP TABLE public.migrations;
       public         heap    postgres    false            �            1259    16453    migrations_id_seq    SEQUENCE     �   CREATE SEQUENCE public.migrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.migrations_id_seq;
       public          postgres    false    217            �           0    0    migrations_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.migrations_id_seq OWNED BY public.migrations.id;
          public          postgres    false    216            �            1259    16628    notification    TABLE       CREATE TABLE public.notification (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    is_delete boolean DEFAULT false NOT NULL,
    title character varying NOT NULL,
    message character varying NOT NULL,
    date timestamp without time zone NOT NULL,
    recipient_id character varying NOT NULL,
    read boolean DEFAULT false,
    prop1 json,
    prop2 json,
    prop3 text,
    prop4 text
);
     DROP TABLE public.notification;
       public         heap    postgres    false    2            �            1259    16462    offer    TABLE     j  CREATE TABLE public.offer (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    is_delete boolean DEFAULT false NOT NULL,
    posit character varying,
    sport character varying,
    paused boolean,
    sexo character varying NOT NULL,
    category character varying NOT NULL,
    province character varying,
    urgency integer,
    retribution boolean NOT NULL,
    prop1 json,
    prop2 json,
    matches text,
    prop4 text,
    inscriptions text,
    club_id uuid
);
    DROP TABLE public.offer;
       public         heap    postgres    false    2            �            1259    16497    position    TABLE     �  CREATE TABLE public."position" (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    is_delete boolean DEFAULT false NOT NULL,
    name character varying NOT NULL,
    prop1 json,
    prop2 json,
    prop3 text,
    prop4 text,
    club_id uuid,
    sport_id uuid
);
    DROP TABLE public."position";
       public         heap    postgres    false    2            �            1259    16555    post    TABLE     $  CREATE TABLE public.post (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    is_delete boolean DEFAULT false NOT NULL,
    image text NOT NULL,
    description character varying NOT NULL,
    likes integer DEFAULT 0 NOT NULL,
    comment_count integer DEFAULT 0 NOT NULL,
    prop1 json,
    prop2 json,
    prop3 text,
    prop4 text,
    author_type character varying NOT NULL,
    author_id uuid
);
    DROP TABLE public.post;
       public         heap    postgres    false    2            �            1259    16615 	   resetCode    TABLE     �  CREATE TABLE public."resetCode" (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    is_delete boolean DEFAULT false NOT NULL,
    code character varying NOT NULL,
    email character varying NOT NULL,
    expires_at timestamp without time zone NOT NULL
);
    DROP TABLE public."resetCode";
       public         heap    postgres    false    2            �            1259    16473    skill    TABLE     d  CREATE TABLE public.skill (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    is_delete boolean DEFAULT false NOT NULL,
    info text NOT NULL,
    prop1 json,
    prop2 json,
    prop3 text,
    prop4 text
);
    DROP TABLE public.skill;
       public         heap    postgres    false    2            �            1259    16484    sport    TABLE     �  CREATE TABLE public.sport (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    is_delete boolean DEFAULT false NOT NULL,
    name character varying NOT NULL,
    img character varying,
    prop1 json,
    prop2 json,
    prop3 text,
    prop4 text,
    club_id uuid
);
    DROP TABLE public.sport;
       public         heap    postgres    false    2            �            1259    16515    sportman    TABLE        CREATE TABLE public.sportman (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    is_delete boolean DEFAULT false NOT NULL,
    type public.sportman_type_enum DEFAULT 'player'::public.sportman_type_enum NOT NULL,
    info text NOT NULL,
    prop1 json,
    prop2 json,
    prop3 text,
    prop4 text,
    user_id uuid,
    club_id uuid,
    sport_id uuid,
    skill_id uuid,
    position_id uuid
);
    DROP TABLE public.sportman;
       public         heap    postgres    false    2    885    885            �            1259    16652    sportman_matches_match    TABLE     j   CREATE TABLE public.sportman_matches_match (
    sportman_id uuid NOT NULL,
    match_id uuid NOT NULL
);
 *   DROP TABLE public.sportman_matches_match;
       public         heap    postgres    false            �            1259    16597    user    TABLE     ]  CREATE TABLE public."user" (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    is_delete boolean DEFAULT false NOT NULL,
    nickname character varying NOT NULL,
    email character varying,
    google_id character varying,
    facebook_id character varying,
    apple_id character varying,
    stripe_id character varying DEFAULT ''::character varying NOT NULL,
    password character varying,
    type public.user_type_enum NOT NULL,
    plan character varying DEFAULT 'basic'::character varying NOT NULL,
    plan_id character varying DEFAULT ''::character varying,
    prop1 json,
    prop2 json,
    following text,
    followers text,
    prop3 text,
    prop4 text,
    club_id uuid,
    sportman_id uuid
);
    DROP TABLE public."user";
       public         heap    postgres    false    2    906            �           2604    16457    migrations id    DEFAULT     n   ALTER TABLE ONLY public.migrations ALTER COLUMN id SET DEFAULT nextval('public.migrations_id_seq'::regclass);
 <   ALTER TABLE public.migrations ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    217    217                       2606    16663 9   match_sportmen_id_sportman PK_0887d078dd3ed493a37f883db35 
   CONSTRAINT     �   ALTER TABLE ONLY public.match_sportmen_id_sportman
    ADD CONSTRAINT "PK_0887d078dd3ed493a37f883db35" PRIMARY KEY (match_id, sportman_id);
 e   ALTER TABLE ONLY public.match_sportmen_id_sportman DROP CONSTRAINT "PK_0887d078dd3ed493a37f883db35";
       public            postgres    false    233    233                       2606    16578 &   comment PK_0b0e4bbc8415ec426f87f3a88e2 
   CONSTRAINT     f   ALTER TABLE ONLY public.comment
    ADD CONSTRAINT "PK_0b0e4bbc8415ec426f87f3a88e2" PRIMARY KEY (id);
 R   ALTER TABLE ONLY public.comment DROP CONSTRAINT "PK_0b0e4bbc8415ec426f87f3a88e2";
       public            postgres    false    226            �           2606    16472 $   offer PK_57c6ae1abe49201919ef68de900 
   CONSTRAINT     d   ALTER TABLE ONLY public.offer
    ADD CONSTRAINT "PK_57c6ae1abe49201919ef68de900" PRIMARY KEY (id);
 P   ALTER TABLE ONLY public.offer DROP CONSTRAINT "PK_57c6ae1abe49201919ef68de900";
       public            postgres    false    218                       2606    16625 (   resetCode PK_60ab9f1d23c69c361b73aaf5bf4 
   CONSTRAINT     j   ALTER TABLE ONLY public."resetCode"
    ADD CONSTRAINT "PK_60ab9f1d23c69c361b73aaf5bf4" PRIMARY KEY (id);
 V   ALTER TABLE ONLY public."resetCode" DROP CONSTRAINT "PK_60ab9f1d23c69c361b73aaf5bf4";
       public            postgres    false    229                       2606    16639 +   notification PK_705b6c7cdf9b2c2ff7ac7872cb7 
   CONSTRAINT     k   ALTER TABLE ONLY public.notification
    ADD CONSTRAINT "PK_705b6c7cdf9b2c2ff7ac7872cb7" PRIMARY KEY (id);
 W   ALTER TABLE ONLY public.notification DROP CONSTRAINT "PK_705b6c7cdf9b2c2ff7ac7872cb7";
       public            postgres    false    230            �           2606    16526 '   sportman PK_731064ef97d7fbd9577e1230ac2 
   CONSTRAINT     g   ALTER TABLE ONLY public.sportman
    ADD CONSTRAINT "PK_731064ef97d7fbd9577e1230ac2" PRIMARY KEY (id);
 S   ALTER TABLE ONLY public.sportman DROP CONSTRAINT "PK_731064ef97d7fbd9577e1230ac2";
       public            postgres    false    222            �           2606    16552 #   club PK_79282481e036a6e0b180afa38aa 
   CONSTRAINT     c   ALTER TABLE ONLY public.club
    ADD CONSTRAINT "PK_79282481e036a6e0b180afa38aa" PRIMARY KEY (id);
 O   ALTER TABLE ONLY public.club DROP CONSTRAINT "PK_79282481e036a6e0b180afa38aa";
       public            postgres    false    224            �           2606    16461 )   migrations PK_8c82d7f526340ab734260ea46be 
   CONSTRAINT     i   ALTER TABLE ONLY public.migrations
    ADD CONSTRAINT "PK_8c82d7f526340ab734260ea46be" PRIMARY KEY (id);
 U   ALTER TABLE ONLY public.migrations DROP CONSTRAINT "PK_8c82d7f526340ab734260ea46be";
       public            postgres    false    217            �           2606    16541 $   match PK_92b6c3a6631dd5b24a67c69f69d 
   CONSTRAINT     d   ALTER TABLE ONLY public.match
    ADD CONSTRAINT "PK_92b6c3a6631dd5b24a67c69f69d" PRIMARY KEY (id);
 P   ALTER TABLE ONLY public.match DROP CONSTRAINT "PK_92b6c3a6631dd5b24a67c69f69d";
       public            postgres    false    223            �           2606    16483 $   skill PK_a0d33334424e64fb78dc3ce7196 
   CONSTRAINT     d   ALTER TABLE ONLY public.skill
    ADD CONSTRAINT "PK_a0d33334424e64fb78dc3ce7196" PRIMARY KEY (id);
 P   ALTER TABLE ONLY public.skill DROP CONSTRAINT "PK_a0d33334424e64fb78dc3ce7196";
       public            postgres    false    219            �           2606    16507 '   position PK_b7f483581562b4dc62ae1a5b7e2 
   CONSTRAINT     i   ALTER TABLE ONLY public."position"
    ADD CONSTRAINT "PK_b7f483581562b4dc62ae1a5b7e2" PRIMARY KEY (id);
 U   ALTER TABLE ONLY public."position" DROP CONSTRAINT "PK_b7f483581562b4dc62ae1a5b7e2";
       public            postgres    false    221                       2606    16651 &   message PK_ba01f0a3e0123651915008bc578 
   CONSTRAINT     f   ALTER TABLE ONLY public.message
    ADD CONSTRAINT "PK_ba01f0a3e0123651915008bc578" PRIMARY KEY (id);
 R   ALTER TABLE ONLY public.message DROP CONSTRAINT "PK_ba01f0a3e0123651915008bc578";
       public            postgres    false    231                       2606    16567 #   post PK_be5fda3aac270b134ff9c21cdee 
   CONSTRAINT     c   ALTER TABLE ONLY public.post
    ADD CONSTRAINT "PK_be5fda3aac270b134ff9c21cdee" PRIMARY KEY (id);
 O   ALTER TABLE ONLY public.post DROP CONSTRAINT "PK_be5fda3aac270b134ff9c21cdee";
       public            postgres    false    225            �           2606    16494 $   sport PK_c67275331afac347120a1032825 
   CONSTRAINT     d   ALTER TABLE ONLY public.sport
    ADD CONSTRAINT "PK_c67275331afac347120a1032825" PRIMARY KEY (id);
 P   ALTER TABLE ONLY public.sport DROP CONSTRAINT "PK_c67275331afac347120a1032825";
       public            postgres    false    220            	           2606    16610 #   user PK_cace4a159ff9f2512dd42373760 
   CONSTRAINT     e   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY (id);
 Q   ALTER TABLE ONLY public."user" DROP CONSTRAINT "PK_cace4a159ff9f2512dd42373760";
       public            postgres    false    228                       2606    16656 5   sportman_matches_match PK_da0de742d1bde300505668d5515 
   CONSTRAINT     �   ALTER TABLE ONLY public.sportman_matches_match
    ADD CONSTRAINT "PK_da0de742d1bde300505668d5515" PRIMARY KEY (sportman_id, match_id);
 a   ALTER TABLE ONLY public.sportman_matches_match DROP CONSTRAINT "PK_da0de742d1bde300505668d5515";
       public            postgres    false    232    232            %           2606    16677 1   club_matches_match PK_e15ff9eaf7a647927146149d8fd 
   CONSTRAINT     �   ALTER TABLE ONLY public.club_matches_match
    ADD CONSTRAINT "PK_e15ff9eaf7a647927146149d8fd" PRIMARY KEY (club_id, match_id);
 ]   ALTER TABLE ONLY public.club_matches_match DROP CONSTRAINT "PK_e15ff9eaf7a647927146149d8fd";
       public            postgres    false    235    235                       2606    16589 #   like PK_eff3e46d24d416b52a7e0ae4159 
   CONSTRAINT     e   ALTER TABLE ONLY public."like"
    ADD CONSTRAINT "PK_eff3e46d24d416b52a7e0ae4159" PRIMARY KEY (id);
 Q   ALTER TABLE ONLY public."like" DROP CONSTRAINT "PK_eff3e46d24d416b52a7e0ae4159";
       public            postgres    false    227            !           2606    16670 1   match_club_id_club PK_fe5d47cc79bafb2a8d8eec45ca4 
   CONSTRAINT     �   ALTER TABLE ONLY public.match_club_id_club
    ADD CONSTRAINT "PK_fe5d47cc79bafb2a8d8eec45ca4" PRIMARY KEY (match_id, club_id);
 ]   ALTER TABLE ONLY public.match_club_id_club DROP CONSTRAINT "PK_fe5d47cc79bafb2a8d8eec45ca4";
       public            postgres    false    234    234                       2606    16612 #   user REL_4f89a8eafafbd7c3193dcff66d 
   CONSTRAINT     e   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "REL_4f89a8eafafbd7c3193dcff66d" UNIQUE (club_id);
 Q   ALTER TABLE ONLY public."user" DROP CONSTRAINT "REL_4f89a8eafafbd7c3193dcff66d";
       public            postgres    false    228                       2606    16614 #   user REL_5aad327088de71eb0cd6e086b8 
   CONSTRAINT     i   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "REL_5aad327088de71eb0cd6e086b8" UNIQUE (sportman_id);
 Q   ALTER TABLE ONLY public."user" DROP CONSTRAINT "REL_5aad327088de71eb0cd6e086b8";
       public            postgres    false    228                       2606    16554 #   club REL_6c8136b34bb2aee2a28e682d7e 
   CONSTRAINT     c   ALTER TABLE ONLY public.club
    ADD CONSTRAINT "REL_6c8136b34bb2aee2a28e682d7e" UNIQUE (user_id);
 O   ALTER TABLE ONLY public.club DROP CONSTRAINT "REL_6c8136b34bb2aee2a28e682d7e";
       public            postgres    false    224            �           2606    16530 '   sportman REL_918631b5a1a3cf26dd3999a4d3 
   CONSTRAINT     h   ALTER TABLE ONLY public.sportman
    ADD CONSTRAINT "REL_918631b5a1a3cf26dd3999a4d3" UNIQUE (skill_id);
 S   ALTER TABLE ONLY public.sportman DROP CONSTRAINT "REL_918631b5a1a3cf26dd3999a4d3";
       public            postgres    false    222            �           2606    16528 '   sportman REL_d0aae5b254c67da2190884c3bf 
   CONSTRAINT     g   ALTER TABLE ONLY public.sportman
    ADD CONSTRAINT "REL_d0aae5b254c67da2190884c3bf" UNIQUE (user_id);
 S   ALTER TABLE ONLY public.sportman DROP CONSTRAINT "REL_d0aae5b254c67da2190884c3bf";
       public            postgres    false    222            �           2606    16496 $   sport UQ_6a16e1d83cb581484036cee92bf 
   CONSTRAINT     a   ALTER TABLE ONLY public.sport
    ADD CONSTRAINT "UQ_6a16e1d83cb581484036cee92bf" UNIQUE (name);
 P   ALTER TABLE ONLY public.sport DROP CONSTRAINT "UQ_6a16e1d83cb581484036cee92bf";
       public            postgres    false    220                       2606    16627 (   resetCode UQ_b0956d865317a9a14e8a6ffce8a 
   CONSTRAINT     h   ALTER TABLE ONLY public."resetCode"
    ADD CONSTRAINT "UQ_b0956d865317a9a14e8a6ffce8a" UNIQUE (email);
 V   ALTER TABLE ONLY public."resetCode" DROP CONSTRAINT "UQ_b0956d865317a9a14e8a6ffce8a";
       public            postgres    false    229                       1259    16672    IDX_1224f38bc177300c56b95a07cf    INDEX     b   CREATE INDEX "IDX_1224f38bc177300c56b95a07cf" ON public.match_club_id_club USING btree (club_id);
 4   DROP INDEX public."IDX_1224f38bc177300c56b95a07cf";
       public            postgres    false    234                       1259    16658    IDX_29787f42b5290b10959cc45984    INDEX     g   CREATE INDEX "IDX_29787f42b5290b10959cc45984" ON public.sportman_matches_match USING btree (match_id);
 4   DROP INDEX public."IDX_29787f42b5290b10959cc45984";
       public            postgres    false    232            "           1259    16679    IDX_392471b823c5eb6a03161a2d56    INDEX     c   CREATE INDEX "IDX_392471b823c5eb6a03161a2d56" ON public.club_matches_match USING btree (match_id);
 4   DROP INDEX public."IDX_392471b823c5eb6a03161a2d56";
       public            postgres    false    235                       1259    16671    IDX_66b451264d2d9abb02b8c17724    INDEX     c   CREATE INDEX "IDX_66b451264d2d9abb02b8c17724" ON public.match_club_id_club USING btree (match_id);
 4   DROP INDEX public."IDX_66b451264d2d9abb02b8c17724";
       public            postgres    false    234                       1259    16665    IDX_7ba66a649183f3a8c792b247bb    INDEX     n   CREATE INDEX "IDX_7ba66a649183f3a8c792b247bb" ON public.match_sportmen_id_sportman USING btree (sportman_id);
 4   DROP INDEX public."IDX_7ba66a649183f3a8c792b247bb";
       public            postgres    false    233                       1259    16664    IDX_94f7c8b78e110d8e1c756512a3    INDEX     k   CREATE INDEX "IDX_94f7c8b78e110d8e1c756512a3" ON public.match_sportmen_id_sportman USING btree (match_id);
 4   DROP INDEX public."IDX_94f7c8b78e110d8e1c756512a3";
       public            postgres    false    233            #           1259    16678    IDX_9d7e134f6320462277b3934d6c    INDEX     b   CREATE INDEX "IDX_9d7e134f6320462277b3934d6c" ON public.club_matches_match USING btree (club_id);
 4   DROP INDEX public."IDX_9d7e134f6320462277b3934d6c";
       public            postgres    false    235                       1259    16657    IDX_9e2ca8c783bae5ff710d1b0cc3    INDEX     j   CREATE INDEX "IDX_9e2ca8c783bae5ff710d1b0cc3" ON public.sportman_matches_match USING btree (sportman_id);
 4   DROP INDEX public."IDX_9e2ca8c783bae5ff710d1b0cc3";
       public            postgres    false    232            *           2606    16705 '   sportman FK_0285b46aa2f29fa5993ef20fb79    FK CONSTRAINT     �   ALTER TABLE ONLY public.sportman
    ADD CONSTRAINT "FK_0285b46aa2f29fa5993ef20fb79" FOREIGN KEY (club_id) REFERENCES public.club(id);
 S   ALTER TABLE ONLY public.sportman DROP CONSTRAINT "FK_0285b46aa2f29fa5993ef20fb79";
       public          postgres    false    222    224    4863            (           2606    16690 '   position FK_0f90ed1ce1a2e2c361680038efa    FK CONSTRAINT     �   ALTER TABLE ONLY public."position"
    ADD CONSTRAINT "FK_0f90ed1ce1a2e2c361680038efa" FOREIGN KEY (club_id) REFERENCES public.club(id);
 U   ALTER TABLE ONLY public."position" DROP CONSTRAINT "FK_0f90ed1ce1a2e2c361680038efa";
       public          postgres    false    221    224    4863            <           2606    16795 1   match_club_id_club FK_1224f38bc177300c56b95a07cf9    FK CONSTRAINT     �   ALTER TABLE ONLY public.match_club_id_club
    ADD CONSTRAINT "FK_1224f38bc177300c56b95a07cf9" FOREIGN KEY (club_id) REFERENCES public.club(id);
 ]   ALTER TABLE ONLY public.match_club_id_club DROP CONSTRAINT "FK_1224f38bc177300c56b95a07cf9";
       public          postgres    false    234    4863    224            8           2606    16775 5   sportman_matches_match FK_29787f42b5290b10959cc459841    FK CONSTRAINT     �   ALTER TABLE ONLY public.sportman_matches_match
    ADD CONSTRAINT "FK_29787f42b5290b10959cc459841" FOREIGN KEY (match_id) REFERENCES public.match(id) ON UPDATE CASCADE ON DELETE CASCADE;
 a   ALTER TABLE ONLY public.sportman_matches_match DROP CONSTRAINT "FK_29787f42b5290b10959cc459841";
       public          postgres    false    223    232    4861            1           2606    16735 #   post FK_2f1a9ca8908fc8168bc18437f62    FK CONSTRAINT     �   ALTER TABLE ONLY public.post
    ADD CONSTRAINT "FK_2f1a9ca8908fc8168bc18437f62" FOREIGN KEY (author_id) REFERENCES public."user"(id);
 O   ALTER TABLE ONLY public.post DROP CONSTRAINT "FK_2f1a9ca8908fc8168bc18437f62";
       public          postgres    false    4873    225    228            >           2606    16805 1   club_matches_match FK_392471b823c5eb6a03161a2d567    FK CONSTRAINT     �   ALTER TABLE ONLY public.club_matches_match
    ADD CONSTRAINT "FK_392471b823c5eb6a03161a2d567" FOREIGN KEY (match_id) REFERENCES public.match(id) ON UPDATE CASCADE ON DELETE CASCADE;
 ]   ALTER TABLE ONLY public.club_matches_match DROP CONSTRAINT "FK_392471b823c5eb6a03161a2d567";
       public          postgres    false    223    4861    235            2           2606    16740 &   comment FK_3ce66469b26697baa097f8da923    FK CONSTRAINT     �   ALTER TABLE ONLY public.comment
    ADD CONSTRAINT "FK_3ce66469b26697baa097f8da923" FOREIGN KEY (author_id) REFERENCES public."user"(id);
 R   ALTER TABLE ONLY public.comment DROP CONSTRAINT "FK_3ce66469b26697baa097f8da923";
       public          postgres    false    228    4873    226            6           2606    16760 #   user FK_4f89a8eafafbd7c3193dcff66db    FK CONSTRAINT     �   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "FK_4f89a8eafafbd7c3193dcff66db" FOREIGN KEY (club_id) REFERENCES public.club(id);
 Q   ALTER TABLE ONLY public."user" DROP CONSTRAINT "FK_4f89a8eafafbd7c3193dcff66db";
       public          postgres    false    224    4863    228            )           2606    16695 '   position FK_501e77052d76bb76aad6d65b6e6    FK CONSTRAINT     �   ALTER TABLE ONLY public."position"
    ADD CONSTRAINT "FK_501e77052d76bb76aad6d65b6e6" FOREIGN KEY (sport_id) REFERENCES public.sport(id);
 U   ALTER TABLE ONLY public."position" DROP CONSTRAINT "FK_501e77052d76bb76aad6d65b6e6";
       public          postgres    false    220    221    4849            7           2606    16765 #   user FK_5aad327088de71eb0cd6e086b85    FK CONSTRAINT     �   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "FK_5aad327088de71eb0cd6e086b85" FOREIGN KEY (sportman_id) REFERENCES public.sportman(id);
 Q   ALTER TABLE ONLY public."user" DROP CONSTRAINT "FK_5aad327088de71eb0cd6e086b85";
       public          postgres    false    228    222    4855            =           2606    16790 1   match_club_id_club FK_66b451264d2d9abb02b8c17724f    FK CONSTRAINT     �   ALTER TABLE ONLY public.match_club_id_club
    ADD CONSTRAINT "FK_66b451264d2d9abb02b8c17724f" FOREIGN KEY (match_id) REFERENCES public.match(id) ON UPDATE CASCADE ON DELETE CASCADE;
 ]   ALTER TABLE ONLY public.match_club_id_club DROP CONSTRAINT "FK_66b451264d2d9abb02b8c17724f";
       public          postgres    false    223    234    4861            0           2606    16730 #   club FK_6c8136b34bb2aee2a28e682d7e3    FK CONSTRAINT     �   ALTER TABLE ONLY public.club
    ADD CONSTRAINT "FK_6c8136b34bb2aee2a28e682d7e3" FOREIGN KEY (user_id) REFERENCES public."user"(id);
 O   ALTER TABLE ONLY public.club DROP CONSTRAINT "FK_6c8136b34bb2aee2a28e682d7e3";
       public          postgres    false    4873    228    224            '           2606    16685 $   sport FK_78f4f1358fb8f1d88e54a354c93    FK CONSTRAINT     �   ALTER TABLE ONLY public.sport
    ADD CONSTRAINT "FK_78f4f1358fb8f1d88e54a354c93" FOREIGN KEY (club_id) REFERENCES public.club(id);
 P   ALTER TABLE ONLY public.sport DROP CONSTRAINT "FK_78f4f1358fb8f1d88e54a354c93";
       public          postgres    false    224    4863    220            :           2606    16785 9   match_sportmen_id_sportman FK_7ba66a649183f3a8c792b247bb8    FK CONSTRAINT     �   ALTER TABLE ONLY public.match_sportmen_id_sportman
    ADD CONSTRAINT "FK_7ba66a649183f3a8c792b247bb8" FOREIGN KEY (sportman_id) REFERENCES public.sportman(id);
 e   ALTER TABLE ONLY public.match_sportmen_id_sportman DROP CONSTRAINT "FK_7ba66a649183f3a8c792b247bb8";
       public          postgres    false    4855    233    222            3           2606    16745 &   comment FK_8aa21186314ce53c5b61a0e8c93    FK CONSTRAINT     �   ALTER TABLE ONLY public.comment
    ADD CONSTRAINT "FK_8aa21186314ce53c5b61a0e8c93" FOREIGN KEY (post_id) REFERENCES public.post(id);
 R   ALTER TABLE ONLY public.comment DROP CONSTRAINT "FK_8aa21186314ce53c5b61a0e8c93";
       public          postgres    false    225    4867    226            +           2606    16720 '   sportman FK_8cb544f030e6b8a59ee26b85541    FK CONSTRAINT     �   ALTER TABLE ONLY public.sportman
    ADD CONSTRAINT "FK_8cb544f030e6b8a59ee26b85541" FOREIGN KEY (position_id) REFERENCES public."position"(id);
 S   ALTER TABLE ONLY public.sportman DROP CONSTRAINT "FK_8cb544f030e6b8a59ee26b85541";
       public          postgres    false    221    222    4853            ,           2606    16715 '   sportman FK_918631b5a1a3cf26dd3999a4d3d    FK CONSTRAINT     �   ALTER TABLE ONLY public.sportman
    ADD CONSTRAINT "FK_918631b5a1a3cf26dd3999a4d3d" FOREIGN KEY (skill_id) REFERENCES public.skill(id);
 S   ALTER TABLE ONLY public.sportman DROP CONSTRAINT "FK_918631b5a1a3cf26dd3999a4d3d";
       public          postgres    false    219    222    4847            ;           2606    16780 9   match_sportmen_id_sportman FK_94f7c8b78e110d8e1c756512a36    FK CONSTRAINT     �   ALTER TABLE ONLY public.match_sportmen_id_sportman
    ADD CONSTRAINT "FK_94f7c8b78e110d8e1c756512a36" FOREIGN KEY (match_id) REFERENCES public.match(id) ON UPDATE CASCADE ON DELETE CASCADE;
 e   ALTER TABLE ONLY public.match_sportmen_id_sportman DROP CONSTRAINT "FK_94f7c8b78e110d8e1c756512a36";
       public          postgres    false    233    223    4861            ?           2606    16800 1   club_matches_match FK_9d7e134f6320462277b3934d6c0    FK CONSTRAINT     �   ALTER TABLE ONLY public.club_matches_match
    ADD CONSTRAINT "FK_9d7e134f6320462277b3934d6c0" FOREIGN KEY (club_id) REFERENCES public.club(id) ON UPDATE CASCADE ON DELETE CASCADE;
 ]   ALTER TABLE ONLY public.club_matches_match DROP CONSTRAINT "FK_9d7e134f6320462277b3934d6c0";
       public          postgres    false    4863    224    235            9           2606    16770 5   sportman_matches_match FK_9e2ca8c783bae5ff710d1b0cc34    FK CONSTRAINT     �   ALTER TABLE ONLY public.sportman_matches_match
    ADD CONSTRAINT "FK_9e2ca8c783bae5ff710d1b0cc34" FOREIGN KEY (sportman_id) REFERENCES public.sportman(id) ON UPDATE CASCADE ON DELETE CASCADE;
 a   ALTER TABLE ONLY public.sportman_matches_match DROP CONSTRAINT "FK_9e2ca8c783bae5ff710d1b0cc34";
       public          postgres    false    232    4855    222            /           2606    16725 $   match FK_bab92e03346755e4c705e5d708a    FK CONSTRAINT     �   ALTER TABLE ONLY public.match
    ADD CONSTRAINT "FK_bab92e03346755e4c705e5d708a" FOREIGN KEY (offer_id_id) REFERENCES public.offer(id);
 P   ALTER TABLE ONLY public.match DROP CONSTRAINT "FK_bab92e03346755e4c705e5d708a";
       public          postgres    false    218    4845    223            &           2606    16680 $   offer FK_c7453a5676997ea5adf4dd365cc    FK CONSTRAINT     �   ALTER TABLE ONLY public.offer
    ADD CONSTRAINT "FK_c7453a5676997ea5adf4dd365cc" FOREIGN KEY (club_id) REFERENCES public.club(id);
 P   ALTER TABLE ONLY public.offer DROP CONSTRAINT "FK_c7453a5676997ea5adf4dd365cc";
       public          postgres    false    4863    218    224            -           2606    16700 '   sportman FK_d0aae5b254c67da2190884c3bfc    FK CONSTRAINT     �   ALTER TABLE ONLY public.sportman
    ADD CONSTRAINT "FK_d0aae5b254c67da2190884c3bfc" FOREIGN KEY (user_id) REFERENCES public."user"(id);
 S   ALTER TABLE ONLY public.sportman DROP CONSTRAINT "FK_d0aae5b254c67da2190884c3bfc";
       public          postgres    false    222    4873    228            4           2606    16755 #   like FK_d41caa70371e578e2a4791a88ae    FK CONSTRAINT     �   ALTER TABLE ONLY public."like"
    ADD CONSTRAINT "FK_d41caa70371e578e2a4791a88ae" FOREIGN KEY (post_id) REFERENCES public.post(id);
 Q   ALTER TABLE ONLY public."like" DROP CONSTRAINT "FK_d41caa70371e578e2a4791a88ae";
       public          postgres    false    227    225    4867            .           2606    16710 '   sportman FK_d66a987b59c56b9f2c57c7ee961    FK CONSTRAINT     �   ALTER TABLE ONLY public.sportman
    ADD CONSTRAINT "FK_d66a987b59c56b9f2c57c7ee961" FOREIGN KEY (sport_id) REFERENCES public.sport(id);
 S   ALTER TABLE ONLY public.sportman DROP CONSTRAINT "FK_d66a987b59c56b9f2c57c7ee961";
       public          postgres    false    220    4849    222            5           2606    16750 #   like FK_db3f30270837f6008d1d61562bd    FK CONSTRAINT     �   ALTER TABLE ONLY public."like"
    ADD CONSTRAINT "FK_db3f30270837f6008d1d61562bd" FOREIGN KEY (author_id) REFERENCES public."user"(id);
 Q   ALTER TABLE ONLY public."like" DROP CONSTRAINT "FK_db3f30270837f6008d1d61562bd";
       public          postgres    false    227    4873    228           