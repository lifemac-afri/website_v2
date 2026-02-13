--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.10
-- Dumped by pg_dump version 9.6.10

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: _board; Type: TABLE; Schema: public; Owner: rebasedata
--

CREATE TABLE public._board (
    id smallint,
    name character varying(24) DEFAULT NULL::character varying,
    role character varying(46) DEFAULT NULL::character varying,
    image_id smallint,
    "order" smallint,
    updated_at character varying(24) DEFAULT NULL::character varying,
    created_at character varying(24) DEFAULT NULL::character varying
);


ALTER TABLE public._board OWNER TO rebasedata;

--
-- Name: _contact_submissions; Type: TABLE; Schema: public; Owner: rebasedata
--

CREATE TABLE public._contact_submissions (
    id character varying(1) DEFAULT NULL::character varying,
    first_name character varying(1) DEFAULT NULL::character varying,
    last_name character varying(1) DEFAULT NULL::character varying,
    email character varying(1) DEFAULT NULL::character varying,
    phone character varying(1) DEFAULT NULL::character varying,
    message character varying(1) DEFAULT NULL::character varying,
    newsletter character varying(1) DEFAULT NULL::character varying,
    updated_at character varying(1) DEFAULT NULL::character varying,
    created_at character varying(1) DEFAULT NULL::character varying
);


ALTER TABLE public._contact_submissions OWNER TO rebasedata;

--
-- Name: _events; Type: TABLE; Schema: public; Owner: rebasedata
--

CREATE TABLE public._events (
    id smallint,
    title character varying(23) DEFAULT NULL::character varying,
    date character varying(24) DEFAULT NULL::character varying,
    location character varying(28) DEFAULT NULL::character varying,
    category character varying(3) DEFAULT NULL::character varying,
    status character varying(8) DEFAULT NULL::character varying,
    image_id smallint,
    description character varying(1) DEFAULT NULL::character varying,
    registrations character varying(1) DEFAULT NULL::character varying,
    updated_at character varying(24) DEFAULT NULL::character varying,
    created_at character varying(24) DEFAULT NULL::character varying,
    "time" character varying(17) DEFAULT NULL::character varying,
    featured smallint
);


ALTER TABLE public._events OWNER TO rebasedata;

--
-- Name: _gallery; Type: TABLE; Schema: public; Owner: rebasedata
--

CREATE TABLE public._gallery (
    id smallint,
    title character varying(20) DEFAULT NULL::character varying,
    category character varying(8) DEFAULT NULL::character varying,
    bulk_upload_id character varying(1) DEFAULT NULL::character varying,
    updated_at character varying(24) DEFAULT NULL::character varying,
    created_at character varying(24) DEFAULT NULL::character varying
);


ALTER TABLE public._gallery OWNER TO rebasedata;

--
-- Name: _gallery_rels; Type: TABLE; Schema: public; Owner: rebasedata
--

CREATE TABLE public._gallery_rels (
    id smallint,
    "order" smallint,
    parent_id smallint,
    path character varying(6) DEFAULT NULL::character varying,
    media_id smallint
);


ALTER TABLE public._gallery_rels OWNER TO rebasedata;

--
-- Name: _impact_metrics; Type: TABLE; Schema: public; Owner: rebasedata
--

CREATE TABLE public._impact_metrics (
    id smallint,
    value smallint,
    title character varying(24) DEFAULT NULL::character varying,
    featured smallint,
    "order" smallint,
    updated_at character varying(24) DEFAULT NULL::character varying,
    created_at character varying(24) DEFAULT NULL::character varying
);


ALTER TABLE public._impact_metrics OWNER TO rebasedata;

--
-- Name: _media; Type: TABLE; Schema: public; Owner: rebasedata
--

CREATE TABLE public._media (
    id smallint,
    alt character varying(20) DEFAULT NULL::character varying,
    updated_at character varying(24) DEFAULT NULL::character varying,
    created_at character varying(24) DEFAULT NULL::character varying,
    url character varying(25) DEFAULT NULL::character varying,
    thumbnail_u_r_l character varying(1) DEFAULT NULL::character varying,
    filename character varying(33) DEFAULT NULL::character varying,
    mime_type character varying(10) DEFAULT NULL::character varying,
    filesize integer,
    width smallint,
    height smallint,
    focal_x smallint,
    focal_y smallint
);


ALTER TABLE public._media OWNER TO rebasedata;

--
-- Name: _newsletter; Type: TABLE; Schema: public; Owner: rebasedata
--

CREATE TABLE public._newsletter (
    id smallint,
    email character varying(27) DEFAULT NULL::character varying,
    updated_at character varying(24) DEFAULT NULL::character varying,
    created_at character varying(24) DEFAULT NULL::character varying,
    name character varying(6) DEFAULT NULL::character varying
);


ALTER TABLE public._newsletter OWNER TO rebasedata;

--
-- Name: _partner_testimonials; Type: TABLE; Schema: public; Owner: rebasedata
--

CREATE TABLE public._partner_testimonials (
    id character varying(1) DEFAULT NULL::character varying,
    name character varying(1) DEFAULT NULL::character varying,
    role character varying(1) DEFAULT NULL::character varying,
    organization character varying(1) DEFAULT NULL::character varying,
    quote character varying(1) DEFAULT NULL::character varying,
    image_id character varying(1) DEFAULT NULL::character varying,
    updated_at character varying(1) DEFAULT NULL::character varying,
    created_at character varying(1) DEFAULT NULL::character varying
);


ALTER TABLE public._partner_testimonials OWNER TO rebasedata;

--
-- Name: _partners; Type: TABLE; Schema: public; Owner: rebasedata
--

CREATE TABLE public._partners (
    id smallint,
    name character varying(24) DEFAULT NULL::character varying,
    logo_id character varying(1) DEFAULT NULL::character varying,
    updated_at character varying(24) DEFAULT NULL::character varying,
    created_at character varying(24) DEFAULT NULL::character varying
);


ALTER TABLE public._partners OWNER TO rebasedata;

--
-- Name: _partnership_applications; Type: TABLE; Schema: public; Owner: rebasedata
--

CREATE TABLE public._partnership_applications (
    id smallint,
    organization_name character varying(21) DEFAULT NULL::character varying,
    contact_name character varying(13) DEFAULT NULL::character varying,
    "position" character varying(20) DEFAULT NULL::character varying,
    email character varying(20) DEFAULT NULL::character varying,
    phone character varying(17) DEFAULT NULL::character varying,
    website character varying(23) DEFAULT NULL::character varying,
    partnership_type character varying(7) DEFAULT NULL::character varying,
    message character varying(20) DEFAULT NULL::character varying,
    hear_about character varying(6) DEFAULT NULL::character varying,
    newsletter smallint,
    updated_at character varying(24) DEFAULT NULL::character varying,
    created_at character varying(24) DEFAULT NULL::character varying
);


ALTER TABLE public._partnership_applications OWNER TO rebasedata;

--
-- Name: _payload_kv; Type: TABLE; Schema: public; Owner: rebasedata
--

CREATE TABLE public._payload_kv (
    id character varying(1) DEFAULT NULL::character varying,
    key character varying(1) DEFAULT NULL::character varying,
    data character varying(1) DEFAULT NULL::character varying
);


ALTER TABLE public._payload_kv OWNER TO rebasedata;

--
-- Name: _payload_locked_documents; Type: TABLE; Schema: public; Owner: rebasedata
--

CREATE TABLE public._payload_locked_documents (
    id smallint,
    global_slug character varying(1) DEFAULT NULL::character varying,
    updated_at character varying(24) DEFAULT NULL::character varying,
    created_at character varying(24) DEFAULT NULL::character varying
);


ALTER TABLE public._payload_locked_documents OWNER TO rebasedata;

--
-- Name: _payload_locked_documents_rels; Type: TABLE; Schema: public; Owner: rebasedata
--

CREATE TABLE public._payload_locked_documents_rels (
    id smallint,
    "order" character varying(1) DEFAULT NULL::character varying,
    parent_id smallint,
    path character varying(8) DEFAULT NULL::character varying,
    users_id character varying(1) DEFAULT NULL::character varying,
    media_id character varying(3) DEFAULT NULL::character varying,
    events_id character varying(1) DEFAULT NULL::character varying,
    stories_id character varying(1) DEFAULT NULL::character varying,
    team_id character varying(1) DEFAULT NULL::character varying,
    testimonials_id character varying(1) DEFAULT NULL::character varying,
    partners_id character varying(1) DEFAULT NULL::character varying,
    newsletter_id character varying(1) DEFAULT NULL::character varying,
    impact_metrics_id character varying(1) DEFAULT NULL::character varying,
    gallery_id character varying(1) DEFAULT NULL::character varying,
    board_id character varying(1) DEFAULT NULL::character varying,
    volunteer_testimonials_id character varying(1) DEFAULT NULL::character varying,
    partner_testimonials_id character varying(1) DEFAULT NULL::character varying,
    volunteer_applications_id character varying(1) DEFAULT NULL::character varying,
    partnership_applications_id character varying(1) DEFAULT NULL::character varying,
    story_submissions_id character varying(1) DEFAULT NULL::character varying,
    contact_submissions_id character varying(1) DEFAULT NULL::character varying
);


ALTER TABLE public._payload_locked_documents_rels OWNER TO rebasedata;

--
-- Name: _payload_migrations; Type: TABLE; Schema: public; Owner: rebasedata
--

CREATE TABLE public._payload_migrations (
    id smallint,
    name character varying(42) DEFAULT NULL::character varying,
    batch smallint,
    updated_at character varying(24) DEFAULT NULL::character varying,
    created_at character varying(24) DEFAULT NULL::character varying
);


ALTER TABLE public._payload_migrations OWNER TO rebasedata;

--
-- Name: _payload_preferences; Type: TABLE; Schema: public; Owner: rebasedata
--

CREATE TABLE public._payload_preferences (
    id smallint,
    key character varying(33) DEFAULT NULL::character varying,
    value character varying(52) DEFAULT NULL::character varying,
    updated_at character varying(24) DEFAULT NULL::character varying,
    created_at character varying(24) DEFAULT NULL::character varying
);


ALTER TABLE public._payload_preferences OWNER TO rebasedata;

--
-- Name: _payload_preferences_rels; Type: TABLE; Schema: public; Owner: rebasedata
--

CREATE TABLE public._payload_preferences_rels (
    id smallint,
    "order" character varying(1) DEFAULT NULL::character varying,
    parent_id smallint,
    path character varying(4) DEFAULT NULL::character varying,
    users_id smallint
);


ALTER TABLE public._payload_preferences_rels OWNER TO rebasedata;

--
-- Name: _stories; Type: TABLE; Schema: public; Owner: rebasedata
--

CREATE TABLE public._stories (
    id smallint,
    title character varying(38) DEFAULT NULL::character varying,
    description character varying(5918) DEFAULT NULL::character varying,
    image_id smallint,
    category character varying(7) DEFAULT NULL::character varying,
    date character varying(24) DEFAULT NULL::character varying,
    updated_at character varying(24) DEFAULT NULL::character varying,
    created_at character varying(24) DEFAULT NULL::character varying,
    location character varying(5) DEFAULT NULL::character varying,
    featured smallint,
    slug character varying(38) DEFAULT NULL::character varying
);


ALTER TABLE public._stories OWNER TO rebasedata;

--
-- Name: _story_submissions; Type: TABLE; Schema: public; Owner: rebasedata
--

CREATE TABLE public._story_submissions (
    id smallint,
    name character varying(16) DEFAULT NULL::character varying,
    email character varying(25) DEFAULT NULL::character varying,
    story character varying(190) DEFAULT NULL::character varying,
    contact_consent smallint,
    status character varying(7) DEFAULT NULL::character varying,
    updated_at character varying(24) DEFAULT NULL::character varying,
    created_at character varying(24) DEFAULT NULL::character varying
);


ALTER TABLE public._story_submissions OWNER TO rebasedata;

--
-- Name: _team; Type: TABLE; Schema: public; Owner: rebasedata
--

CREATE TABLE public._team (
    id smallint,
    name character varying(32) DEFAULT NULL::character varying,
    role character varying(47) DEFAULT NULL::character varying,
    image_id smallint,
    socials_linkedin character varying(1) DEFAULT NULL::character varying,
    socials_twitter character varying(1) DEFAULT NULL::character varying,
    socials_email character varying(23) DEFAULT NULL::character varying,
    updated_at character varying(24) DEFAULT NULL::character varying,
    created_at character varying(24) DEFAULT NULL::character varying
);


ALTER TABLE public._team OWNER TO rebasedata;

--
-- Name: _testimonials; Type: TABLE; Schema: public; Owner: rebasedata
--

CREATE TABLE public._testimonials (
    id smallint,
    quote character varying(374) DEFAULT NULL::character varying,
    name character varying(24) DEFAULT NULL::character varying,
    role character varying(45) DEFAULT NULL::character varying,
    image_id character varying(2) DEFAULT NULL::character varying,
    program character varying(7) DEFAULT NULL::character varying,
    status character varying(9) DEFAULT NULL::character varying,
    date character varying(24) DEFAULT NULL::character varying,
    updated_at character varying(24) DEFAULT NULL::character varying,
    created_at character varying(24) DEFAULT NULL::character varying,
    featured character varying(5) DEFAULT NULL::character varying
);


ALTER TABLE public._testimonials OWNER TO rebasedata;

--
-- Name: _users; Type: TABLE; Schema: public; Owner: rebasedata
--

CREATE TABLE public._users (
    id smallint,
    updated_at character varying(24) DEFAULT NULL::character varying,
    created_at character varying(24) DEFAULT NULL::character varying,
    email character varying(19) DEFAULT NULL::character varying,
    reset_password_token character varying(1) DEFAULT NULL::character varying,
    reset_password_expiration character varying(1) DEFAULT NULL::character varying,
    salt character varying(64) DEFAULT NULL::character varying,
    hash character varying(1024) DEFAULT NULL::character varying,
    login_attempts smallint,
    lock_until character varying(1) DEFAULT NULL::character varying
);


ALTER TABLE public._users OWNER TO rebasedata;

--
-- Name: _users_sessions; Type: TABLE; Schema: public; Owner: rebasedata
--

CREATE TABLE public._users_sessions (
    _order smallint,
    _parent_id smallint,
    id character varying(36) DEFAULT NULL::character varying,
    created_at character varying(24) DEFAULT NULL::character varying,
    expires_at character varying(24) DEFAULT NULL::character varying
);


ALTER TABLE public._users_sessions OWNER TO rebasedata;

--
-- Name: _volunteer_applications; Type: TABLE; Schema: public; Owner: rebasedata
--

CREATE TABLE public._volunteer_applications (
    id smallint,
    first_name character varying(3) DEFAULT NULL::character varying,
    last_name character varying(5) DEFAULT NULL::character varying,
    email character varying(25) DEFAULT NULL::character varying,
    phone character varying(17) DEFAULT NULL::character varying,
    address character varying(20) DEFAULT NULL::character varying,
    skills character varying(20) DEFAULT NULL::character varying,
    newsletter smallint,
    updated_at character varying(24) DEFAULT NULL::character varying,
    created_at character varying(24) DEFAULT NULL::character varying
);


ALTER TABLE public._volunteer_applications OWNER TO rebasedata;

--
-- Name: _volunteer_testimonials; Type: TABLE; Schema: public; Owner: rebasedata
--

CREATE TABLE public._volunteer_testimonials (
    id smallint,
    name character varying(19) DEFAULT NULL::character varying,
    role character varying(1) DEFAULT NULL::character varying,
    quote character varying(183) DEFAULT NULL::character varying,
    image_id smallint,
    updated_at character varying(24) DEFAULT NULL::character varying,
    created_at character varying(24) DEFAULT NULL::character varying
);


ALTER TABLE public._volunteer_testimonials OWNER TO rebasedata;

--
-- Data for Name: _board; Type: TABLE DATA; Schema: public; Owner: rebasedata
--

COPY public._board (id, name, role, image_id, "order", updated_at, created_at) FROM stdin;
1	Joseph Dzamesi	Board Chair	140	1	2025-12-26T20:51:04.042Z	2025-12-26T17:11:35.490Z
2	Mama Bobi III	Deputy Board Chair (Legal & Governance Expert)	137	2	2025-12-26T20:24:22.465Z	2025-12-26T17:12:27.621Z
3	Edem Kudjo Apetorgbor	Board Member (Finance Expert)	138	3	2025-12-26T20:27:27.448Z	2025-12-26T17:12:27.657Z
4	Harriet Yayra Adzofu	 Board Member (Health & Development Expert)	136	4	2025-12-26T20:21:51.907Z	2025-12-26T17:12:27.670Z
5	Courage Christson Tetteh	Founder & Executive Director	13	5	2025-12-26T19:49:57.239Z	2025-12-26T17:12:27.676Z
\.


--
-- Data for Name: _contact_submissions; Type: TABLE DATA; Schema: public; Owner: rebasedata
--

COPY public._contact_submissions (id, first_name, last_name, email, phone, message, newsletter, updated_at, created_at) FROM stdin;
\.


--
-- Data for Name: _events; Type: TABLE DATA; Schema: public; Owner: rebasedata
--

COPY public._events (id, title, date, location, category, status, image_id, description, registrations, updated_at, created_at, "time", featured) FROM stdin;
1	Youth Learning Together	2026-01-30T12:00:00.000Z	Black Forge, LIFE-MAC Africa	YLT	upcoming	142			2025-12-29T18:45:09.376Z	2025-12-29T18:45:09.375Z	5:00 PM - 7:00 PM	1
\.


--
-- Data for Name: _gallery; Type: TABLE DATA; Schema: public; Owner: rebasedata
--

COPY public._gallery (id, title, category, bulk_upload_id, updated_at, created_at) FROM stdin;
1	STEMIZE-KPOGADZI	STEMize		2025-12-09T21:27:50.899Z	2025-12-09T21:27:50.899Z
2	Adwumawura-PrinceKay	Events		2025-12-09T21:32:06.904Z	2025-12-09T21:32:06.904Z
3	PSP Regional Model	PSP		2025-12-09T21:56:39.640Z	2025-12-09T21:56:39.638Z
4	Nyornuvi Sample	Nyornuvi		2025-12-24T16:06:37.183Z	2025-12-24T15:46:41.446Z
\.


--
-- Data for Name: _gallery_rels; Type: TABLE DATA; Schema: public; Owner: rebasedata
--

COPY public._gallery_rels (id, "order", parent_id, path, media_id) FROM stdin;
1	1	1	images	33
2	2	1	images	34
3	3	1	images	35
4	4	1	images	36
5	5	1	images	37
6	6	1	images	38
7	7	1	images	39
8	8	1	images	40
9	9	1	images	41
10	10	1	images	42
11	11	1	images	43
12	12	1	images	44
13	13	1	images	45
14	14	1	images	46
15	15	1	images	47
16	16	1	images	48
17	17	1	images	49
18	18	1	images	50
19	19	1	images	51
20	20	1	images	52
21	21	1	images	53
22	22	1	images	54
23	23	1	images	55
24	24	1	images	56
25	25	1	images	57
26	26	1	images	58
27	27	1	images	59
28	28	1	images	60
29	29	1	images	61
30	30	1	images	62
31	31	1	images	63
32	32	1	images	64
33	33	1	images	65
34	34	1	images	66
35	35	1	images	68
36	36	1	images	70
37	37	1	images	71
38	38	1	images	73
39	39	1	images	74
40	40	1	images	75
41	41	1	images	76
42	42	1	images	78
43	1	2	images	67
44	2	2	images	69
45	3	2	images	72
46	4	2	images	77
47	5	2	images	79
48	6	2	images	80
49	7	2	images	81
50	8	2	images	82
51	9	2	images	83
52	10	2	images	84
53	11	2	images	85
54	12	2	images	86
55	13	2	images	87
56	14	2	images	88
57	15	2	images	89
58	16	2	images	90
59	17	2	images	91
60	18	2	images	92
61	19	2	images	93
62	20	2	images	94
63	21	2	images	95
64	1	3	images	96
65	2	3	images	97
66	3	3	images	98
67	4	3	images	99
68	5	3	images	100
69	6	3	images	101
70	7	3	images	102
71	8	3	images	103
72	9	3	images	104
73	10	3	images	105
74	11	3	images	106
75	12	3	images	107
76	13	3	images	108
77	14	3	images	109
78	15	3	images	110
79	16	3	images	111
80	17	3	images	112
81	18	3	images	113
82	19	3	images	114
83	20	3	images	115
84	1	4	images	127
85	2	4	images	128
86	3	4	images	129
87	4	4	images	130
88	5	4	images	131
89	6	4	images	132
\.


--
-- Data for Name: _impact_metrics; Type: TABLE DATA; Schema: public; Owner: rebasedata
--

COPY public._impact_metrics (id, value, title, featured, "order", updated_at, created_at) FROM stdin;
1	82	Impact Sessions Executed	1	0	2025-12-25T20:25:57.417Z	2025-12-09T20:39:56.166Z
2	64	Communities Empowered	1	2	2025-12-25T20:30:59.786Z	2025-12-09T20:41:07.255Z
3	7929	Beneficiaries Reached	1	3	2025-12-25T20:41:55.768Z	2025-12-09T20:42:10.832Z
4	397	Volunteers Mobilized	1	1	2025-12-25T20:29:09.630Z	2025-12-09T20:43:37.975Z
\.


--
-- Data for Name: _media; Type: TABLE DATA; Schema: public; Owner: rebasedata
--

COPY public._media (id, alt, updated_at, created_at, url, thumbnail_u_r_l, filename, mime_type, filesize, width, height, focal_x, focal_y) FROM stdin;
1	Sarah 	2025-12-09T18:28:30.641Z	2025-12-09T18:22:58.198Z	/api/media/file/sarah.png		sarah-1.png	image/png	658177	810	1080	50	50
2	Sarah	2025-12-09T18:54:26.966Z	2025-12-09T18:54:26.960Z			sarah.png	image/png	658177	810	1080	50	50
3	Daniella Godwilmann	2025-12-09T19:18:48.485Z	2025-12-09T19:18:48.484Z			danny-tbr.png	image/png	871768	1088	960	50	50
4	Daniella Godwilmann	2025-12-09T19:21:35.851Z	2025-12-09T19:21:35.850Z			danny-rb.png	image/png	577100	1023	927	50	50
5	Constantina Flavia	2025-12-09T19:22:14.171Z	2025-12-09T19:22:14.170Z			tina.png	image/png	817924	896	934	50	50
6	Frederick Ekpe	2025-12-09T19:23:13.306Z	2025-12-09T19:23:13.306Z			fred.png	image/png	613259	896	920	50	50
7	Collins Sitty	2025-12-09T19:24:23.809Z	2025-12-09T19:24:23.809Z			collins.png	image/png	763638	896	952	50	50
8	Temple Lomotey	2025-12-09T19:25:15.508Z	2025-12-09T19:25:15.508Z			temple.png	image/png	627760	896	973	50	50
9	Favour Godson	2025-12-09T19:28:43.708Z	2025-12-09T19:28:43.708Z			fav.png	image/png	1480823	1449	1532	50	50
10	Eugene Sewor	2025-12-09T19:32:28.842Z	2025-12-09T19:32:28.842Z			eugene.png	image/png	2622662	1638	1730	50	50
11	Dyvia Woedem	2025-12-09T19:33:13.251Z	2025-12-09T19:33:13.251Z			dyvia.png	image/png	707105	1024	959	50	50
12	Benjamin Aklama	2025-12-09T19:34:11.748Z	2025-12-09T19:34:11.748Z			bk.png	image/png	678926	832	900	50	50
13	CCT	2025-12-09T19:37:03.850Z	2025-12-09T19:37:03.850Z			cct.png	image/png	907985	1102	1103	50	50
14	Henry	2025-12-09T19:54:46.633Z	2025-12-09T19:54:46.633Z			Henry.jpg	image/jpeg	161585	1080	1080	50	50
15	Precious	2025-12-09T19:59:56.464Z	2025-12-09T19:59:56.464Z			precious.jpg	image/jpeg	172567	1080	1080	50	50
16	Beatrice Kpor	2025-12-09T20:04:48.021Z	2025-12-09T20:04:48.021Z			Beatrice.jpg	image/jpeg	159233	1080	1080	50	50
17	1	2025-12-09T21:05:24.552Z	2025-12-09T21:05:24.552Z			IMG_0003.jpg	image/jpeg	459132	2048	1152	50	50
18	stemize-kpogadzi	2025-12-09T21:06:10.090Z	2025-12-09T21:06:10.090Z			IMG_0011.jpg	image/jpeg	652503	2048	1365	50	50
19	stemize-kpogadzi	2025-12-09T21:06:14.753Z	2025-12-09T21:06:14.753Z			IMG_0013.jpg	image/jpeg	480109	2048	1365	50	50
20	stemize-kpogadzi	2025-12-09T21:06:30.965Z	2025-12-09T21:06:30.965Z			IMG_0014.jpg	image/jpeg	519695	2048	1365	50	50
21	stemize-kpogadzi	2025-12-09T21:06:42.636Z	2025-12-09T21:06:42.635Z			IMG_0017.jpg	image/jpeg	464185	2048	1365	50	50
22	stemize-kpogadzi	2025-12-09T21:07:02.684Z	2025-12-09T21:07:02.684Z			IMG_0018.jpg	image/jpeg	474263	2048	1365	50	50
23	stemize-kpogadzi	2025-12-09T21:07:26.929Z	2025-12-09T21:07:26.928Z			IMG_0019.jpg	image/jpeg	617175	2048	1365	50	50
24	stemize-kpogadzi	2025-12-09T21:07:33.990Z	2025-12-09T21:07:33.990Z			IMG_0020.jpg	image/jpeg	601142	2048	1365	50	50
25	stemize-kpogadzi	2025-12-09T21:07:42.777Z	2025-12-09T21:07:42.777Z			IMG_0021.jpg	image/jpeg	581589	2048	1365	50	50
26	stemize-kpogadzi	2025-12-09T21:07:51.378Z	2025-12-09T21:07:51.378Z			IMG_0023.jpg	image/jpeg	577516	2048	1365	50	50
27	stemize-kpogadzi	2025-12-09T21:07:59.336Z	2025-12-09T21:07:59.336Z			IMG_0026.jpg	image/jpeg	654087	2048	1365	50	50
28	stemize-kpogadzi	2025-12-09T21:08:03.224Z	2025-12-09T21:08:03.224Z			IMG_0028.jpg	image/jpeg	525400	2048	1365	50	50
29	stemize-kpogadzi	2025-12-09T21:08:07.417Z	2025-12-09T21:08:07.417Z			IMG_0030.jpg	image/jpeg	488824	2048	1365	50	50
30	stemize-kpogadzi	2025-12-09T21:08:11.516Z	2025-12-09T21:08:11.516Z			IMG_0031.jpg	image/jpeg	502384	2048	1365	50	50
31	stemize-kpogadzi	2025-12-09T21:08:20.173Z	2025-12-09T21:08:20.173Z			IMG_0032.jpg	image/jpeg	564973	2048	1365	50	50
32	stemize-kpogadzi	2025-12-09T21:08:28.454Z	2025-12-09T21:08:28.454Z			IMG_0033.jpg	image/jpeg	547123	2048	1365	50	50
33	stemize-kpogadzi	2025-12-09T21:24:55.739Z	2025-12-09T21:24:55.736Z			IMG_0017-1.jpg	image/jpeg	464185	2048	1365	50	50
34	stemize-kpogadzi	2025-12-09T21:24:59.711Z	2025-12-09T21:24:59.711Z			IMG_0018-1.jpg	image/jpeg	474263	2048	1365	50	50
35	stemize-kpogadzi	2025-12-09T21:25:03.313Z	2025-12-09T21:25:03.313Z			IMG_0019-1.jpg	image/jpeg	617175	2048	1365	50	50
36	stemize-kpogadzi	2025-12-09T21:25:07.023Z	2025-12-09T21:25:07.023Z			IMG_0020-1.jpg	image/jpeg	601142	2048	1365	50	50
37	stemize-kpogadzi	2025-12-09T21:25:09.904Z	2025-12-09T21:25:09.904Z			IMG_0021-1.jpg	image/jpeg	581589	2048	1365	50	50
38	stemize-kpogadzi	2025-12-09T21:25:14.282Z	2025-12-09T21:25:14.281Z			IMG_0023-1.jpg	image/jpeg	577516	2048	1365	50	50
39	stemize-kpogadzi	2025-12-09T21:25:18.210Z	2025-12-09T21:25:18.210Z			IMG_0026-1.jpg	image/jpeg	654087	2048	1365	50	50
40	stemize-kpogadzi	2025-12-09T21:25:22.539Z	2025-12-09T21:25:22.539Z			IMG_0028-1.jpg	image/jpeg	525400	2048	1365	50	50
41	stemize-kpogadzi	2025-12-09T21:25:25.849Z	2025-12-09T21:25:25.849Z			IMG_0030-1.jpg	image/jpeg	488824	2048	1365	50	50
42	stemize-kpogadzi	2025-12-09T21:25:29.092Z	2025-12-09T21:25:29.091Z			IMG_0031-1.jpg	image/jpeg	502384	2048	1365	50	50
43	stemize-kpogadzi	2025-12-09T21:25:31.469Z	2025-12-09T21:25:31.468Z			IMG_0032-1.jpg	image/jpeg	564973	2048	1365	50	50
44	stemize-kpogadzi	2025-12-09T21:25:35.393Z	2025-12-09T21:25:35.393Z			IMG_0033-1.jpg	image/jpeg	547123	2048	1365	50	50
45	stemize-kpogadzi	2025-12-09T21:25:39.440Z	2025-12-09T21:25:39.440Z			IMG_0034.jpg	image/jpeg	732564	2048	1365	50	50
46	stemize-kpogadzi	2025-12-09T21:25:44.429Z	2025-12-09T21:25:44.429Z			IMG_0037.jpg	image/jpeg	680379	2048	1365	50	50
47	stemize-kpogadzi	2025-12-09T21:25:47.571Z	2025-12-09T21:25:47.570Z			IMG_0039.jpg	image/jpeg	477467	2048	1365	50	50
48	stemize-kpogadzi	2025-12-09T21:25:50.748Z	2025-12-09T21:25:50.748Z			IMG_0041.jpg	image/jpeg	655052	2048	1365	50	50
49	stemize-kpogadzi	2025-12-09T21:25:53.093Z	2025-12-09T21:25:53.093Z			IMG_0042.jpg	image/jpeg	617679	2048	1365	50	50
50	stemize-kpogadzi	2025-12-09T21:25:55.972Z	2025-12-09T21:25:55.972Z			IMG_0043.jpg	image/jpeg	663803	2048	1365	50	50
51	stemize-kpogadzi	2025-12-09T21:26:00.572Z	2025-12-09T21:26:00.572Z			IMG_0044.jpg	image/jpeg	748948	2048	1365	50	50
52	stemize-kpogadzi	2025-12-09T21:26:03.486Z	2025-12-09T21:26:03.486Z			IMG_0045.jpg	image/jpeg	547304	2048	1365	50	50
53	stemize-kpogadzi	2025-12-09T21:26:06.587Z	2025-12-09T21:26:06.587Z			IMG_0046.jpg	image/jpeg	670522	2048	1365	50	50
54	stemize-kpogadzi	2025-12-09T21:26:10.538Z	2025-12-09T21:26:10.538Z			IMG_0047.jpg	image/jpeg	720189	2048	1365	50	50
55	stemize-kpogadzi	2025-12-09T21:26:14.986Z	2025-12-09T21:26:14.986Z			IMG_0049.jpg	image/jpeg	727407	2048	1365	50	50
56	stemize-kpogadzi	2025-12-09T21:26:19.183Z	2025-12-09T21:26:19.183Z			IMG_0054.jpg	image/jpeg	526663	2048	1365	50	50
57	stemize-kpogadzi	2025-12-09T21:26:23.544Z	2025-12-09T21:26:23.544Z			IMG_0059.jpg	image/jpeg	502406	2048	1365	50	50
58	stemize-kpogadzi	2025-12-09T21:26:27.496Z	2025-12-09T21:26:27.496Z			IMG_0063.jpg	image/jpeg	499583	2048	1365	50	50
59	stemize-kpogadzi	2025-12-09T21:26:29.786Z	2025-12-09T21:26:29.785Z			IMG_0064.jpg	image/jpeg	486283	2048	1365	50	50
60	stemize-kpogadzi	2025-12-09T21:26:32.417Z	2025-12-09T21:26:32.417Z			IMG_0065.jpg	image/jpeg	510411	2048	1365	50	50
61	stemize-kpogadzi	2025-12-09T21:26:36.095Z	2025-12-09T21:26:36.095Z			IMG_0066.jpg	image/jpeg	561917	2048	1365	50	50
62	stemize-kpogadzi	2025-12-09T21:26:38.320Z	2025-12-09T21:26:38.320Z			IMG_0070.jpg	image/jpeg	475951	2048	1365	50	50
63	stemize-kpogadzi	2025-12-09T21:26:41.051Z	2025-12-09T21:26:41.051Z			IMG_0073.jpg	image/jpeg	452179	2048	1365	50	50
64	stemize-kpogadzi	2025-12-09T21:26:43.832Z	2025-12-09T21:26:43.832Z			IMG_0074.jpg	image/jpeg	415948	2048	1365	50	50
65	stemize-kpogadzi	2025-12-09T21:26:48.601Z	2025-12-09T21:26:48.601Z			IMG_0076.jpg	image/jpeg	718027	2048	1365	50	50
66	stemize-kpogadzi	2025-12-09T21:26:54.246Z	2025-12-09T21:26:54.246Z			IMG_0077.jpg	image/jpeg	694412	2048	1365	50	50
67	Adwumawura-PrinceKay	2025-12-09T21:26:57.716Z	2025-12-09T21:26:57.716Z			IMG_6444.jpg	image/jpeg	1863945	3900	3572	50	50
68	stemize-kpogadzi	2025-12-09T21:26:58.517Z	2025-12-09T21:26:58.517Z			IMG_0079.jpg	image/jpeg	744810	2048	1365	50	50
69	Adwumawura-PrinceKay	2025-12-09T21:27:01.499Z	2025-12-09T21:27:01.499Z			IMG_6445.jpg	image/jpeg	1108679	3072	3788	50	50
70	stemize-kpogadzi	2025-12-09T21:27:02.352Z	2025-12-09T21:27:02.352Z			IMG_0080.jpg	image/jpeg	749762	2048	1365	50	50
71	stemize-kpogadzi	2025-12-09T21:27:05.272Z	2025-12-09T21:27:05.272Z			IMG_0092.jpg	image/jpeg	391701	2048	1365	50	50
72	Adwumawura-PrinceKay	2025-12-09T21:27:06.893Z	2025-12-09T21:27:06.893Z			IMG_6449.jpg	image/jpeg	1145623	4451	3214	50	50
73	stemize-kpogadzi	2025-12-09T21:27:08.399Z	2025-12-09T21:27:08.399Z			IMG_0093.jpg	image/jpeg	389492	2048	1365	50	50
74	stemize-kpogadzi	2025-12-09T21:27:12.009Z	2025-12-09T21:27:12.009Z			IMG_0096.jpg	image/jpeg	547655	2048	1365	50	50
75	stemize-kpogadzi	2025-12-09T21:27:15.523Z	2025-12-09T21:27:15.523Z			IMG_0098.jpg	image/jpeg	540742	2048	1365	50	50
76	stemize-kpogadzi	2025-12-09T21:27:18.300Z	2025-12-09T21:27:18.299Z			IMG_0099.jpg	image/jpeg	374730	2048	1365	50	50
77	Adwumawura-PrinceKay	2025-12-09T21:27:20.179Z	2025-12-09T21:27:20.179Z			IMG_6451.jpg	image/jpeg	2387693	6085	4057	50	50
78	stemize-kpogadzi	2025-12-09T21:27:21.711Z	2025-12-09T21:27:21.711Z			IMG_0101.jpg	image/jpeg	553259	2048	1365	50	50
79	Adwumawura-PrinceKay	2025-12-09T21:27:38.276Z	2025-12-09T21:27:38.276Z			IMG_6453.jpg	image/jpeg	2284064	5544	3140	50	50
80	Adwumawura-PrinceKay	2025-12-09T21:27:45.728Z	2025-12-09T21:27:45.728Z			IMG_6456.jpg	image/jpeg	1550952	5436	3164	50	50
81	Adwumawura-PrinceKay	2025-12-09T21:27:54.736Z	2025-12-09T21:27:54.735Z			IMG_6458.jpg	image/jpeg	1673168	5352	3476	50	50
82	Adwumawura-PrinceKay	2025-12-09T21:28:03.229Z	2025-12-09T21:28:03.229Z			IMG_6459.jpg	image/jpeg	1678162	3768	3968	50	50
83	Adwumawura-PrinceKay	2025-12-09T21:28:09.664Z	2025-12-09T21:28:09.664Z			IMG_6460.jpg	image/jpeg	1356327	3180	3031	50	50
84	Adwumawura-PrinceKay	2025-12-09T21:28:14.587Z	2025-12-09T21:28:14.587Z			IMG_6461.jpg	image/jpeg	1109704	3228	3656	50	50
85	Adwumawura-PrinceKay	2025-12-09T21:28:24.991Z	2025-12-09T21:28:24.991Z			IMG_6462.jpg	image/jpeg	1450099	4080	4160	50	50
86	Adwumawura-PrinceKay	2025-12-09T21:28:42.561Z	2025-12-09T21:28:42.561Z			IMG_6466.jpg	image/jpeg	1498413	3984	3752	50	50
87	Adwumawura-PrinceKay	2025-12-09T21:28:50.792Z	2025-12-09T21:28:50.792Z			IMG_6467.jpg	image/jpeg	1998573	4428	2995	50	50
88	Adwumawura-PrinceKay	2025-12-09T21:29:02.731Z	2025-12-09T21:29:02.731Z			IMG_6468.jpg	image/jpeg	1990240	6048	4160	50	50
89	Adwumawura-PrinceKay	2025-12-09T21:29:35.190Z	2025-12-09T21:29:35.189Z			IMG_6469.jpg	image/jpeg	2788301	6240	4160	50	50
90	Adwumawura-PrinceKay	2025-12-09T21:29:48.642Z	2025-12-09T21:29:48.642Z			IMG_6470.jpg	image/jpeg	2291278	5988	4160	50	50
91	Adwumawura-PrinceKay	2025-12-09T21:29:58.488Z	2025-12-09T21:29:58.488Z			IMG_6471.jpg	image/jpeg	1443312	4164	3116	50	50
92	Adwumawura-PrinceKay	2025-12-09T21:30:29.955Z	2025-12-09T21:30:29.955Z			IMG_6474.jpg	image/jpeg	2592669	6084	3308	50	50
93	Adwumawura-PrinceKay	2025-12-09T21:30:38.222Z	2025-12-09T21:30:38.222Z			IMG_6476.jpg	image/jpeg	1248676	3684	3019	50	50
94	Adwumawura-PrinceKay	2025-12-09T21:30:54.206Z	2025-12-09T21:30:54.206Z			IMG_6480.jpg	image/jpeg	1891465	5124	3944	50	50
95	Adwumawura-PrinceKay	2025-12-09T21:31:13.668Z	2025-12-09T21:31:13.668Z			IMG_6483.jpg	image/jpeg	1908784	6240	4160	50	50
96	PSP Regional Model	2025-12-09T21:48:08.149Z	2025-12-09T21:48:08.147Z			IMG_0188.jpg	image/jpeg	4768542	5472	3648	50	50
97	PSP Regional Model	2025-12-09T21:48:24.724Z	2025-12-09T21:48:24.724Z			IMG_0189.jpg	image/jpeg	4149677	5472	3648	50	50
98	PSP Regional Model	2025-12-09T21:48:44.888Z	2025-12-09T21:48:44.888Z			IMG_0190.jpg	image/jpeg	5225121	5472	3648	50	50
99	PSP Regional Model	2025-12-09T21:49:06.225Z	2025-12-09T21:49:06.225Z			IMG_0192.jpg	image/jpeg	4237914	5472	3648	50	50
100	PSP Regional Model	2025-12-09T21:49:25.731Z	2025-12-09T21:49:25.731Z			IMG_0195.jpg	image/jpeg	4614453	5472	3648	50	50
101	PSP Regional Model	2025-12-09T21:49:41.759Z	2025-12-09T21:49:41.759Z			IMG_0196.jpg	image/jpeg	4309625	5472	3648	50	50
102	PSP Regional Model	2025-12-09T21:49:59.045Z	2025-12-09T21:49:59.044Z			IMG_0197.jpg	image/jpeg	4848572	5472	3648	50	50
103	PSP Regional Model	2025-12-09T21:50:13.357Z	2025-12-09T21:50:13.357Z			IMG_0198.jpg	image/jpeg	3564453	5472	3648	50	50
104	PSP Regional Model	2025-12-09T21:50:32.673Z	2025-12-09T21:50:32.673Z			IMG_0199.jpg	image/jpeg	3417317	5472	3648	50	50
105	PSP Regional Model	2025-12-09T21:50:47.920Z	2025-12-09T21:50:47.920Z			IMG_0203.jpg	image/jpeg	3445993	5472	3648	50	50
106	PSP Regional Model	2025-12-09T21:51:07.272Z	2025-12-09T21:51:07.272Z			IMG_0204.jpg	image/jpeg	3352396	5472	3648	50	50
107	PSP Regional Model	2025-12-09T21:51:25.847Z	2025-12-09T21:51:25.847Z			IMG_0206.jpg	image/jpeg	3957576	5472	3648	50	50
108	PSP Regional Model	2025-12-09T21:51:44.145Z	2025-12-09T21:51:44.145Z			IMG_0208.jpg	image/jpeg	3344103	5472	3648	50	50
109	PSP Regional Model	2025-12-09T21:52:08.026Z	2025-12-09T21:52:08.026Z			IMG_0211.jpg	image/jpeg	4637160	5472	3648	50	50
110	PSP Regional Model	2025-12-09T21:52:27.137Z	2025-12-09T21:52:27.137Z			IMG_0218.jpg	image/jpeg	4304887	5472	3648	50	50
111	PSP Regional Model	2025-12-09T21:52:53.761Z	2025-12-09T21:52:53.761Z			IMG_0225.jpg	image/jpeg	4905270	5472	3648	50	50
112	PSP Regional Model	2025-12-09T21:53:46.300Z	2025-12-09T21:53:46.300Z			IMG_0230.jpg	image/jpeg	4586442	5472	3648	50	50
113	PSP Regional Model	2025-12-09T21:54:29.729Z	2025-12-09T21:54:29.729Z			IMG_0237.jpg	image/jpeg	4789689	5472	3648	50	50
114	PSP Regional Model	2025-12-09T21:54:50.182Z	2025-12-09T21:54:50.182Z			IMG_0238.jpg	image/jpeg	4933958	5472	3648	50	50
115	PSP Regional Model	2025-12-09T21:55:10.099Z	2025-12-09T21:55:10.098Z			IMG_0247.jpg	image/jpeg	3650431	5472	3648	50	50
116	ylt-today	2025-12-10T17:09:09.813Z	2025-12-10T17:09:09.813Z			IMG_6783.jpg	image/jpeg	10069885	3746	5340	50	50
117	ylt-today	2025-12-10T17:10:16.040Z	2025-12-10T17:10:16.040Z			IMG_6785.jpg	image/jpeg	9815679	3800	5412	50	50
118	ylt-today	2025-12-10T17:10:52.517Z	2025-12-10T17:10:52.517Z			IMG_6788.jpg	image/jpeg	7012762	3548	5358	50	50
119	ylt-today	2025-12-10T17:14:21.266Z	2025-12-10T17:14:21.266Z			IMG_6830.jpg	image/jpeg	9607553	4047	3673	50	50
120	ylt-today	2025-12-10T17:16:26.663Z	2025-12-10T17:16:26.663Z			IMG_6833.jpg	image/jpeg	6542555	3166	3957	50	50
121	ylt-today	2025-12-10T17:17:52.131Z	2025-12-10T17:17:52.131Z			IMG_6835.jpg	image/jpeg	8981877	4059	4735	50	50
122	ylt-today	2025-12-10T17:18:29.485Z	2025-12-10T17:18:29.485Z			IMG_6836.jpg	image/jpeg	9513246	4081	4748	50	50
123	ylt-today	2025-12-10T17:19:12.079Z	2025-12-10T17:19:12.079Z			IMG_6842.jpg	image/jpeg	9207314	3541	5409	50	50
124	nyornuvi	2025-12-24T15:33:04.050Z	2025-12-24T15:33:04.049Z			MG_3752 1.png	image/png	438959	742	300	50	50
125	nyornuvi	2025-12-24T15:33:05.542Z	2025-12-24T15:33:05.541Z			LIFE-MAC-84-of-256-scaled 1.png	image/png	282326	443	300	50	50
126	nyornuvi	2025-12-24T15:33:07.069Z	2025-12-24T15:33:07.069Z			MG_2641-scaled 1.png	image/png	295669	442	300	50	50
127	nyornuvi	2025-12-24T15:46:31.757Z	2025-12-24T15:46:31.747Z			MG_3752 1-1.png	image/png	438959	742	300	50	50
128	nyornuvi	2025-12-24T15:46:33.553Z	2025-12-24T15:46:33.553Z			LIFE-MAC-84-of-256-scaled 1-1.png	image/png	282326	443	300	50	50
129	nyornuvi	2025-12-24T15:46:36.159Z	2025-12-24T15:46:36.158Z			MG_2641-scaled 1-1.png	image/png	295669	442	300	50	50
130	nyornuvi	2025-12-24T16:02:02.449Z	2025-12-24T16:02:02.440Z			IMG_0496.jpeg	image/jpeg	1596479	2048	1360	50	50
131	nyornuvi	2025-12-24T16:02:31.320Z	2025-12-24T16:02:31.320Z			IMG_0495.jpeg	image/jpeg	2052566	2048	1360	50	50
132	nyornuvi	2025-12-24T16:03:00.164Z	2025-12-24T16:03:00.164Z			IMG_0494.jpeg	image/jpeg	1517233	2048	1360	50	50
133	avatar	2025-12-26T19:59:44.298Z	2025-12-26T19:59:44.298Z			avatar	image/png	61834	560	550	50	50
134	avatar	2025-12-26T20:10:03.398Z	2025-12-26T20:10:03.397Z			avatar-female	image/png	214376	1396	1368	50	50
135	avatar	2025-12-26T20:16:35.580Z	2025-12-26T20:16:35.580Z			avatar-male	image/png	237043	1410	1398	50	50
136	yayra	2025-12-26T20:21:40.395Z	2025-12-26T20:21:40.395Z			Yayra.png	image/png	664114	800	800	50	50
137	mama-bobi	2025-12-26T20:24:15.878Z	2025-12-26T20:24:15.878Z			mama-bobi	image/png	4351015	2048	2048	50	50
138	joseph-dzamesi	2025-12-26T20:26:15.911Z	2025-12-26T20:26:15.911Z			joseph-dzamesi	image/png	1829225	1142	1600	50	50
139	joseph-dzamesi	2025-12-26T20:50:25.777Z	2025-12-26T20:50:25.776Z			joseph-dzamesi-1.joseph-dzamesi	image/png	355845	731	1024	50	50
140	joseph-dzamesi	2025-12-26T20:50:55.839Z	2025-12-26T20:50:55.839Z			joseph	image/png	355845	731	1024	50	50
141	bk	2025-12-26T21:11:13.156Z	2025-12-26T21:11:13.156Z			bk-aklama	image/png	1205226	1320	1654	50	50
142	ylt	2025-12-29T18:44:54.235Z	2025-12-29T18:44:54.234Z			yltlogosamples.png	image/png	41669	689	473	50	50
143	impact	2025-12-30T14:31:24.003Z	2025-12-30T14:31:24.003Z			interns-1-1024x352.jpg	image/jpeg	90876	1024	352	50	50
\.


--
-- Data for Name: _newsletter; Type: TABLE DATA; Schema: public; Owner: rebasedata
--

COPY public._newsletter (id, email, updated_at, created_at, name) FROM stdin;
1	eugene.sewor@gmail.com	2025-12-09T20:27:41.896Z	2025-12-09T20:27:41.895Z	
2	eugene.sew4@gmail.com	2025-12-10T11:19:10.097Z	2025-12-10T11:19:10.095Z	
3	dyvia@gmail.com	2025-12-10T16:42:14.641Z	2025-12-10T16:42:14.638Z	
4	eugenesew4@gmail.com	2025-12-25T12:44:41.419Z	2025-12-25T12:44:41.416Z	
5	eugenesew4+mobile@gmail.com	2025-12-25T12:44:59.371Z	2025-12-25T12:44:59.370Z	
6	eugenesew4@mail.com	2025-12-26T13:28:46.803Z	2025-12-26T13:28:46.803Z	Eugene
\.


--
-- Data for Name: _partner_testimonials; Type: TABLE DATA; Schema: public; Owner: rebasedata
--

COPY public._partner_testimonials (id, name, role, organization, quote, image_id, updated_at, created_at) FROM stdin;
\.


--
-- Data for Name: _partners; Type: TABLE DATA; Schema: public; Owner: rebasedata
--

COPY public._partners (id, name, logo_id, updated_at, created_at) FROM stdin;
1	GhanaThink		2025-12-09T17:49:14.139Z	2025-12-09T17:49:14.139Z
2	Africa Ethics Institute		2025-12-09T17:49:14.209Z	2025-12-09T17:49:14.208Z
3	Ghana Education Service		2025-12-09T17:49:14.278Z	2025-12-09T17:49:14.278Z
4	JA Ghana		2025-12-09T17:49:14.322Z	2025-12-09T17:49:14.322Z
5	SRC		2025-12-09T17:49:14.404Z	2025-12-09T17:49:14.404Z
6	University of Ghana		2025-12-09T17:49:14.407Z	2025-12-09T17:49:14.407Z
7	UNICEF		2025-12-09T17:49:14.410Z	2025-12-09T17:49:14.410Z
8	Ho Technical University		2025-12-09T17:49:14.414Z	2025-12-09T17:49:14.414Z
9	National Youth Authority		2025-12-09T17:49:14.416Z	2025-12-09T17:49:14.416Z
\.


--
-- Data for Name: _partnership_applications; Type: TABLE DATA; Schema: public; Owner: rebasedata
--

COPY public._partnership_applications (id, organization_name, contact_name, "position", email, phone, website, partnership_type, message, hear_about, newsletter, updated_at, created_at) FROM stdin;
1	Saunders Hahn Traders	Talon Douglas	Unde ea sunt aut dol	qusow@mailinator.com	+1 (235) 196-5562	https://www.gytyfuze.us	funding	Quia lorem et quo et	social	0	2025-12-31T10:16:11.277Z	2025-12-31T10:16:11.277Z
\.


--
-- Data for Name: _payload_kv; Type: TABLE DATA; Schema: public; Owner: rebasedata
--

COPY public._payload_kv (id, key, data) FROM stdin;
\.


--
-- Data for Name: _payload_locked_documents; Type: TABLE DATA; Schema: public; Owner: rebasedata
--

COPY public._payload_locked_documents (id, global_slug, updated_at, created_at) FROM stdin;
1		2025-12-26T17:24:37.367Z	2025-12-26T17:24:37.367Z
2		2025-12-29T18:51:45.394Z	2025-12-29T18:51:45.394Z
\.


--
-- Data for Name: _payload_locked_documents_rels; Type: TABLE DATA; Schema: public; Owner: rebasedata
--

COPY public._payload_locked_documents_rels (id, "order", parent_id, path, users_id, media_id, events_id, stories_id, team_id, testimonials_id, partners_id, newsletter_id, impact_metrics_id, gallery_id, board_id, volunteer_testimonials_id, partner_testimonials_id, volunteer_applications_id, partnership_applications_id, story_submissions_id, contact_submissions_id) FROM stdin;
1		1	document		132															
2		1	user	1																
3		2	document			1														
4		2	user	1																
\.


--
-- Data for Name: _payload_migrations; Type: TABLE DATA; Schema: public; Owner: rebasedata
--

COPY public._payload_migrations (id, name, batch, updated_at, created_at) FROM stdin;
1	dev	-1	2025-12-31 15:14:52	2025-12-09T17:49:13.436Z
2	20251225_214228_add_name_to_newsletter	1	2025-12-27T17:14:27.980Z	2025-12-27T17:14:27.979Z
3	20251226_add_board_members	1	2025-12-27T17:14:28.179Z	2025-12-27T17:14:28.179Z
4	20251227_171752_add_volunteer_applications	2	2025-12-27T17:23:37.042Z	2025-12-27T17:23:37.041Z
5	20251229_144924_add_story_submissions	3	2025-12-29T14:55:51.427Z	2025-12-29T14:55:51.426Z
\.


--
-- Data for Name: _payload_preferences; Type: TABLE DATA; Schema: public; Owner: rebasedata
--

COPY public._payload_preferences (id, key, value, updated_at, created_at) FROM stdin;
1	collection-testimonials	{"editViewType":"default","limit":10}	2025-12-09T19:56:49.679Z	2025-12-09T17:49:43.894Z
2	collection-team	{"editViewType":"default","limit":10}	2025-12-09T19:19:34.666Z	2025-12-09T17:49:47.141Z
3	collection-stories	{"editViewType":"default","limit":10}	2025-12-10T17:17:06.211Z	2025-12-09T17:49:51.333Z
4	collection-events	{"editViewType":"default","limit":10}	2025-12-29T16:32:28.149Z	2025-12-09T17:50:18.195Z
5	collection-media	{"editViewType":"default","limit":50}	2025-12-30T14:30:09.135Z	2025-12-09T17:51:18.818Z
6	collection-users	{"limit":10,"editViewType":"default"}	2025-12-26T13:37:20.099Z	2025-12-09T17:51:23.304Z
7	collection-partners	{"editViewType":"default"}	2025-12-09T17:51:41.009Z	2025-12-09T17:51:36.936Z
8	collection-newsletter	{"editViewType":"default","limit":10}	2025-12-09T20:27:57.983Z	2025-12-09T20:23:41.904Z
9	collection-impact-metrics	{"editViewType":"default","limit":10}	2025-12-09T20:42:18.838Z	2025-12-09T20:39:11.360Z
10	collection-gallery	{"editViewType":"default","limit":10}	2025-12-09T21:08:31.546Z	2025-12-09T21:03:29.932Z
11	nav	{"groups":{"Collections":{"open":true}},"open":true}	2025-12-26T13:29:17.917Z	2025-12-10T12:11:16.223Z
12	collection-board	{"limit":10,"editViewType":"default","sort":"order"}	2025-12-26T20:10:13.599Z	2025-12-26T17:14:41.610Z
13	collection-volunteer-testimonials	{"editViewType":"default","limit":10}	2025-12-27T15:30:38.520Z	2025-12-27T15:18:09.827Z
14	collection-story-submissions	{"limit":10,"editViewType":"default"}	2025-12-30T19:48:28.301Z	2025-12-29T15:21:39.057Z
\.


--
-- Data for Name: _payload_preferences_rels; Type: TABLE DATA; Schema: public; Owner: rebasedata
--

COPY public._payload_preferences_rels (id, "order", parent_id, path, users_id) FROM stdin;
7		7	user	1
13		2	user	1
14		1	user	1
15		8	user	1
16		9	user	1
18		10	user	1
21		3	user	1
22		11	user	1
23		6	user	1
24		12	user	1
25		13	user	1
27		4	user	1
28		5	user	1
29		14	user	1
\.


--
-- Data for Name: _stories; Type: TABLE DATA; Schema: public; Owner: rebasedata
--

COPY public._stories (id, title, description, image_id, category, date, updated_at, created_at, location, featured, slug) FROM stdin;
1	The Journey of Our First Intern Cohort	{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Our journey as the first interns at LIFE-MAC Africa since its rebranding has been nothing short of transformative. When we arrived, our first major challenge was waiting for us: bringing the organization’s website to life.","type":"text","version":1}],"direction":null,"format":"","indent":0,"type":"paragraph","version":1,"textFormat":0,"textStyle":""},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Using WordPress, we combined our diverse skill sets to create a functional and engaging online platform. It wasn't just about coding; it was a crash course in web design, user experience, and, most importantly, effective teamwork.","type":"text","version":1}],"direction":null,"format":"","indent":0,"type":"paragraph","version":1,"textFormat":0,"textStyle":""},{"children":[{"detail":0,"format":1,"mode":"normal","style":"","text":"From Coding to Community Impact","type":"text","version":1}],"direction":null,"format":"","indent":0,"type":"heading","version":1,"textFormat":1,"tag":"h5"},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Beyond the website, we submerged ourselves in robotics and STEM projects. We built traffic light systems with Arduino, mastered acoustic systems, and sharpened our logic using mBlock and Scratch. These hands-on experiences engineered a deeper passion for technology in all of us.","type":"text","version":1}],"direction":null,"format":"","indent":0,"type":"paragraph","version":1,"textFormat":0,"textStyle":""},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"The highlight of our internship was the 2024 “International Day of the Girl Child” STEMize Project. We transitioned from learners to leaders, empowering young girls by teaching them robotics and science. It was a powerful reminder that sharing knowledge is just as impactful as acquiring it.","type":"text","version":1}],"direction":null,"format":"","indent":0,"type":"paragraph","version":1,"textFormat":0,"textStyle":""},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Our team, comprising Ernest, Daniella, Collins, Temple, Favour, Frederick, and Gabriel, found unique ways to describe the growth we experienced:","type":"text","version":1}],"direction":null,"format":"","indent":0,"type":"paragraph","version":1,"textFormat":0,"textStyle":""},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Our team found unique ways to describe the growth we experienced during the internship.","type":"text","version":1}],"direction":null,"format":"","indent":0,"type":"paragraph","version":1,"textFormat":0,"textStyle":""},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"For Daniella, the technical process felt surprisingly domestic; she noted that “building a website is like cooking Jollof; it requires teamwork, patience, and getting everything just right.”","type":"text","version":1}],"direction":null,"format":"","indent":0,"type":"paragraph","version":1,"textFormat":0,"textStyle":""},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Ernest viewed the work through a mission-driven lens, reflecting that “building a WordPress site is like empowering communities,” where each plugin adds a new layer of potential and the end result is always worth it.","type":"text","version":1}],"direction":null,"format":"","indent":0,"type":"paragraph","version":1,"textFormat":0,"textStyle":""},{"type":"upload","version":3,"format":"","id":"6953e24de26b7971779f1896","fields":null,"relationTo":"media","value":142},{"children":[],"direction":null,"format":"","indent":0,"type":"paragraph","version":1,"textFormat":0,"textStyle":""},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"The culture left a mark on Favour, who discovered that “learning doesn’t have to be serious to be impactful,” while Collins summarized the entire journey as “a roller coaster ride of challenges, laughter, and ‘Eureka’ moments.”","type":"text","version":1}],"direction":null,"format":"","indent":0,"type":"paragraph","version":1,"textFormat":0,"textStyle":""},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Reflecting on the cohort's success, ","type":"text","version":1},{"detail":0,"format":1,"mode":"normal","style":"","text":"Courage Christson Tetteh","type":"text","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":", founder of LIFE-MAC Africa, shared:","type":"text","version":1}],"direction":null,"format":"justify","indent":0,"type":"paragraph","version":1,"textFormat":0,"textStyle":""},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"“Having these young and vibrant folks as part of our journey is incredibly symbolic. We bought the domain back in January 2024, but our busy lives couldn’t give it the attention it needed. For eight months, it hung in limbo until these amazing interns arrived.","type":"text","version":1}],"direction":null,"format":"justify","indent":0,"type":"quote","version":1},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Anytime I type our website URL now, I won’t just see a webpage; I’ll remember the energy of Ernest, Daniella, Collins, Temple, Favour, Frederick, and Gabriel. They brought it to life.”","type":"text","version":1}],"direction":null,"format":"justify","indent":0,"type":"quote","version":1},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"We leave LIFE-MAC Africa with newfound confidence, technical skills, and a readiness for whatever comes next. This internship built the foundation for our future careers.","type":"text","version":1}],"direction":null,"format":"","indent":0,"type":"paragraph","version":1,"textFormat":0,"textStyle":""}],"direction":null,"format":"","indent":0,"type":"root","version":1}}	143	General	2024-11-14T12:00:00.000Z	2025-12-30T14:32:41.505Z	2025-12-30T14:32:41.505Z	Ghana	0	the-journey-of-our-first-intern-cohort
\.


--
-- Data for Name: _story_submissions; Type: TABLE DATA; Schema: public; Owner: rebasedata
--

COPY public._story_submissions (id, name, email, story, contact_consent, status, updated_at, created_at) FROM stdin;
1	Yoshio Farrell	qukipejoq@mailinator.com	Suscipit itaque corp	1	pending	2025-12-29T15:19:48.604Z	2025-12-29T15:19:48.600Z
2	Yvonne Mercer	lilajykydo@mailinator.com	Asperiores dolor har	0	pending	2025-12-29T15:24:15.641Z	2025-12-29T15:24:15.640Z
3	Hadley Barker	nepoty@mailinator.com	For Daniella, the technical process felt surprisingly domestic; she noted that “building a website is like cooking Jollof; it requires teamwork, patience, and getting everything just right.”	1	pending	2025-12-30T19:54:17.336Z	2025-12-30T19:54:17.335Z
4	Demetria Vazquez	qijisodib@mailinator.com	For Daniella, the technical process felt surprisingly domestic; she noted that “building a website is like cooking Jollof; it requires teamwork, patience, and getting everything just right.”	1	pending	2025-12-30T19:55:25.718Z	2025-12-30T19:55:25.717Z
5	Cara Kirkland	ryquve@mailinator.com	Excepturi culpa vita	1	pending	2025-12-31T09:50:25.971Z	2025-12-31T09:50:25.969Z
6	Velma Waller	difybarit@mailinator.com	Rerum eum ea ut id 	1	pending	2025-12-31T10:07:28.147Z	2025-12-31T10:07:28.146Z
7	Kadeem Key	gyracuqoc@mailinator.com	Ullamco debitis aut 	1	pending	2025-12-31T10:12:42.479Z	2025-12-31T10:12:42.477Z
\.


--
-- Data for Name: _team; Type: TABLE DATA; Schema: public; Owner: rebasedata
--

COPY public._team (id, name, role, image_id, socials_linkedin, socials_twitter, socials_email, updated_at, created_at) FROM stdin;
1	Courage C. Tetteh	Founder & Executive Director	13	#	#	cctetteh@lifemac.org	2025-12-26T21:14:54.425Z	2025-12-09T17:49:14.016Z
2	Sarah Sekpey	People & Culture Director	2	#	#	sarah@lifemac.org	2025-12-09T18:57:11.887Z	2025-12-09T17:49:14.075Z
3	Benjamin K. Aklama	Programs Director	141	#	#	bkaklama@lifemac.org	2025-12-26T21:11:28.460Z	2025-12-09T17:49:14.079Z
4	Dyvia W.A. Akortsu	Finance Officer	11	#	#	finance@lifemac.org	2025-12-26T20:58:15.284Z	2025-12-09T17:49:14.082Z
5	Eugene E. Sewor	Digital Innovation Lead	10	#	#	devteam@lifemac.org	2025-12-26T20:56:01.316Z	2025-12-09T17:49:14.088Z
6	Favour Godson	Business Development Officer & Product Designer	9	#	#	fgodson@lifemac.org	2025-12-10T16:50:14.697Z	2025-12-09T17:49:14.094Z
7	Temple S. Lomotey	Backend Developer & STEM Instructor	8	#	#	temple@lifemac.org	2025-12-26T20:55:51.326Z	2025-12-09T17:49:14.098Z
8	Collins W. Sitty	Frontend Developer & STEM Instructor	7	#	#	collins@lifemac.org	2025-12-26T20:55:29.698Z	2025-12-09T17:49:14.103Z
9	Frederick Ekpe	Creative Lead	6	#	#	frederick@lifemac.org	2025-12-09T19:23:36.138Z	2025-12-09T17:49:14.108Z
10	Constantina E.A. Agbenorlawoduga	Social Media Manager	5	#	#	constantina@lifemac.org	2025-12-26T20:58:22.983Z	2025-12-09T17:49:14.115Z
11	Daniella Godwilmann	MERL Associate	4	#	#	merl@lifemac.org	2025-12-10T16:50:03.379Z	2025-12-09T17:49:14.123Z
\.


--
-- Data for Name: _testimonials; Type: TABLE DATA; Schema: public; Owner: rebasedata
--

COPY public._testimonials (id, quote, name, role, image_id, program, status, date, updated_at, created_at, featured) FROM stdin;
1	Volunteering with LIFE-MAC Africa has been one of the most rewarding experiences of my life. Seeing the direct impact of my work on young people's lives gives me immense satisfaction.	Daniella Godwilmann	MERL Intern		General	published	2025-12-09T17:49:14.128Z	2025-12-09T17:49:14.129Z	2025-12-09T17:49:14.129Z	false
2	As a workshop facilitator, I've not only been able to share my knowledge but also learn so much from the participants. The collaborative environment LIFE-MAC creates is truly special.	Constantina Flavia	Content Manager		General	published	2025-12-09T17:49:14.132Z	2025-12-09T17:49:14.132Z	2025-12-09T17:49:14.132Z	false
3	The team at LIFE-MAC Africa is incredibly supportive. They provide all the resources and guidance you need to make a meaningful contribution as a volunteer.	Frederick Ekpe	Brand Strategist		General	published	2025-12-09T17:49:14.135Z	2025-12-09T17:49:14.136Z	2025-12-09T17:49:14.136Z	false
4	Several years ago, mentors introduced me to the world of technology and programming, sparking my interest in coding. The basics I learned opened my eyes and inspired me to pursue a degree in ICT. I’m grateful for their guidance, which played a key role in shaping my career path.	Henry Deladem Nyadzi	ICT Student, University of Education, Winneba	14	General	published		2025-12-09T19:57:50.106Z	2025-12-09T19:57:50.106Z	1
5	The Nyornuvi (Girl) Project offered hope to vulnerable girls at risk of exploitation due to their inability to afford sanitary pads. By addressing this basic need, the initiative empowered them to take control of their health and dignity.	Precious Dzidepo Akplome	CEO, Precious Inspire	15	General	published		2025-12-09T20:00:08.757Z	2025-12-09T20:00:08.757Z	1
6	The Paradigm Shift Project has motivated our students to take their studies seriously and approach the BECE with confidence. Thanks to the learning strategies they were taught, the majority achieved single-digit aggregates and were placed in prestigious senior high schools like Achimota SHS. This project has truly transformed their academic potential and future prospects.	Beatrice Kpor	Former Head Teacher, HTU Basic	16	General	published		2025-12-25T20:43:52.631Z	2025-12-09T20:04:52.519Z	1
\.


--
-- Data for Name: _users; Type: TABLE DATA; Schema: public; Owner: rebasedata
--

COPY public._users (id, updated_at, created_at, email, reset_password_token, reset_password_expiration, salt, hash, login_attempts, lock_until) FROM stdin;
1	2025-12-09T17:49:39.784Z	2025-12-09T17:49:39.783Z	devteam@lifemac.org			c6d3b678624ecbb695a9bed850a2f89e003770691b5f2021a3dbf42388040ce6	1df9efbdbd99f2917e85e7c079de772c585f58be728863ba58951ee550a76bcf9efe9ec8526c72151251b3322d727465d2ca0457a836ff7ff6b26d6f28e9e00a35add61112a07143507313f042c39d7a9ef1b971d0ad3bba0c7150c52db2090462692fe0d515711e6ed808e7bbd2f918997d5506aa9a282cc2d9bbd6f375ebb25f8fc38c50b39bf8e462db81376e16e511593ea9bc465951cc30817b03532401dc45e0fd202304c76ba74a536642cc21a78c2cd15b7e6801c6095ac79a9735376025c3086f0a3b67610012e4d8674c76612f0300b9dff039c76ab40c0d7e863412ee96c99282165913997a3d8f028e81ad7cf99426908d85380d459c0a4ddfb3b1931799ad7b9b05f6d467eb654bf219cf4b732801f152c823c8e057d7fa1d60c6550529d94e68acdf63521f23cd7d306593b705593d626a692eb89f9465d1650577c1a706798f221973be0bdcb2529bf1ef25a7f217ebe9a8bfc561c1494ee07e31358460c2d731d470b721fcf1417d4a85822c9ad67500bb6dd698ea2ddf7aa5f86731ac7ab2676495f2d5057b35bd46c3c67c4ad0b531ae881d1fbd3b1c3a356f178d7bc0d2158148c7374d2461ab7adc8ebad9abe29be4bf446e9605ed8aae78f0ef9a727b8d40bb9db8623c823f818a60c96f5073cca2ea18168feb23c0587908fdb9e18b194e05471ecbac9806c6aee129a865d62bcc85e8794c0d344f	0	
2	2025-12-26T13:37:56.135Z	2025-12-26T13:37:56.135Z	collins@lifemac.org			cfdb8765b2954b3223058e08e42f5b9ec434801629d5014af6aee01bd85f90e2	25b4a1e5b72d1b177a0628ae9add82feb2e8d1f24bf4a06f2ea37db4072cafddf23dd2d180f5f028283970bb1df4b0503b43db20b4da86c943c393f9fbe7702792a898ed608c7ae471de6b24edf1cae4674e3dd36566441445c0fa5e163434ae53d7574de5c0cc05f5d0a21b00bf2971e79dd0b54267901bf99f570c8620c57c5974f6aaddc84875ccddf5b26c706ff553ef2adaa53e04cb271a44323b1eeae6523e652f3d97276a8b52d7b6809ef587e0222052fad465a3fb298bc120808336f1064fccd8bf9ba31e574895ff9c8a58316592fd4c3e311155b4144c5dc561a206b34a4c23546780a9c8c6350f53967af55279d6abd84fe70eec026636b0dbfed2faf6fd4ab8b0fb77eb47bfebc935b1287ba21f77af076376a75c2a917273ee45eec0800da6b5927f986f33907688a3064e8c2cd3db4fd7ffa0c8c07f4a6d9bbc1b944a329a34f36c1a4878261e0d2dfc57adde364ae586946641093376d280155c0ad353a1d1cae337f3c5b77b87222e80b544824b8baa14290d9ff674f1c3118fa4162eddad6308eec79b934b206b471558d0d225a9059955a733962c91c929c250ed961373d28d40f0bf0d37368075e114f6a670c90febbacfa29014bb67585ae431585c728d363a641d759a8c53778a9f851c93a997281c506a3ba2048b37a229f21b0fea8ebe97ac16f9fd7d878f46c20f9d31a4db3cf62de44778c42b	0	
\.


--
-- Data for Name: _users_sessions; Type: TABLE DATA; Schema: public; Owner: rebasedata
--

COPY public._users_sessions (_order, _parent_id, id, created_at, expires_at) FROM stdin;
1	1	080c8c11-3c60-4943-aa3a-8e41f2492c97	2025-12-30T18:33:07.896Z	2025-12-30T20:33:07.896Z
\.


--
-- Data for Name: _volunteer_applications; Type: TABLE DATA; Schema: public; Owner: rebasedata
--

COPY public._volunteer_applications (id, first_name, last_name, email, phone, address, skills, newsletter, updated_at, created_at) FROM stdin;
1	Ava	Baker	ranazeduko@mailinator.com	+1 (673) 445-8623	Lorem sit ea necessi	Voluptatem cupidatat	1	2025-12-31T10:15:06.624Z	2025-12-31T10:15:06.624Z
\.


--
-- Data for Name: _volunteer_testimonials; Type: TABLE DATA; Schema: public; Owner: rebasedata
--

COPY public._volunteer_testimonials (id, name, role, quote, image_id, updated_at, created_at) FROM stdin;
1	Daniella Godwilmann		Volunteering with LIFE-MAC Africa has been one of the most rewarding experiences of my life. Seeing the direct impact of my work on young people's lives gives me immense satisfaction.	4	2025-12-27T15:18:40.315Z	2025-12-27T15:18:40.314Z
2	Constantina Flavia		As a workshop facilitator, I've not only been able to share my knowledge but also learn so much from the participants. The collaborative environment LIFE-MAC creates is truly special.	5	2025-12-27T15:20:40.079Z	2025-12-27T15:20:40.079Z
3	Frederick Ekpe		The team at LIFE-MAC Africa is incredibly supportive. They provide all the resources and guidance you need to make a meaningful contribution as a volunteer.	6	2025-12-27T15:21:27.710Z	2025-12-27T15:21:27.710Z
\.


--
-- PostgreSQL database dump complete
--

COMMIT;
