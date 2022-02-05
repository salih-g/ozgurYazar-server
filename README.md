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
- [x] POST /admin/contents/new Create new content
- [ ] PATCH /admin/contents/:content_id Update content by id
- [ ] DELETE /admin/contents/:content_id Delete content by id

- [ ] GET /admin/sections/:content_id Create new section
- [ ] POST /admin/sections/new/:content_id Create new section
- [ ] DELETE /admin/sections/:content_id Create new section
- [ ] POST /admin/sections/newPage/:section_id Create new page
- [ ] PATCH /admin/contents/newPage/:section_id Update

## Public Service:

- [x] GET /contents Get all published contents
- [ ] GET /contents/:content_id Get content by id
- [ ] GET /contents/sections/:content_id Get all sections by content id
- [ ] GET /sections/:section_id Get section by id

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
			"published": false,
			"pages": [
				{
					"content": "<p>lorem</p>",
					"_id": "61fac67094a24ed5485ef72d",
					"createdAt": "2022-02-02T17:59:12.206Z",
					"updatedAt": "2022-02-02T17:59:12.206Z"
				}
			],
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

### Data model:

![Model](./model.png)
