# Ozgur Yazar | Server

This is a learn project about book blog.

## Technologies

- Node js
- Mongodb

## Endpoints & Services

---

### Auth Service:

- [x] POST /auth/login
- [x] POST /auth/register / TEMP

### Admin Service:

- [x] GET /admin/contents Get all contents
- [x] GET /admin/contents/:content_id Get content by id
- [x] POST /admin/contents/ Create new content
- [x] DELETE /admin/contents/:content_id Delete content by id
- [x] PATCH /admin/contents/:content_id Update content by id

- [x] POST /admin/contents/sections/:content_id Create new section
- [x] GET /admin/contents/sections/:section_id Get section by id
- [x] DELETE /admin/contents/sections/:content_id Delete section
- [x] PATCH /admin/contents/sections/:section_id Update section

## Public Service:

- [x] GET /contents Get all published contents
- [x] GET /contents/:content_id Get content by id
- [x] GET /sections/:section_id Get section by id //Note: paginate content field by word

---

### Json data:

```json
{
	"_id": "61fac67094a24ed5485ef730",
	"title": "Selam",
	"desc": "<p>Selam</p>",
	"published": false,
	"sections": [
		{
			"title": "Bolum 1",
			"content:"<p>blabla</p>",
			"published": false,
			"_id": "61fac67094a24ed5485ef72e",
			"createdAt": "2022-02-02T17:59:12.207Z",
			"updatedAt": "2022-02-02T17:59:12.207Z"
		}
	],
	"createdAt": "2022-02-02T17:59:12.207Z",
	"updatedAt": "2022-02-02T17:59:12.207Z"
}
```

### Notes:

- Her içerik yaratılırken 1 adet bölümü olucak
- Her bölüm oluştuğunda bir adet sayfası olucak
- Her sayfaya kelime limiti konucak
- Yeni sayfa oluşturmak için butona basılıcak
- Errorları logger ile handle et
- Sectionlar kendi içinde update olcak
- Her section oluştuğunda yeni sayfa eklencek

### Bugs:

- Delete conntected sections with content

### Data model:

![Model](./model.png)
