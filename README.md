# Personal Resume
Was bored so decided to digitize my resume.  
I wrote a small tool to quickly put structured data from a json to golang templates so that I can style the information the way I want.

## Tech
So far the tool doesn't have a name, it's way too simple; I'd say it's a toy.
```
vaiktorg.github.io/
└─ src/
    ├─ static/
    │   ├─ css/
    │   │   └─ index.css
    │   ├─ js/
    │   │   └─ index.js
    │   └─ images/
    │       └─ .png
    ├─ views/
    │   ├─ controls.gohtml
    │   ├─ index.gohtml
    │   └─ resume.gohtml
    ├─ data.json
    └─ gotemplay
```
### What can it currently do?
- Placeholder images:
	- GET query: `<img src="/image">`
		- `col`: **color** in rgb, hex not supported yet.
			 - `col="126,103,153"`
		 - `res`: **resolution** of width,height in pixels.
		      - `res="500,128"`
		 - `cap`: Any **caption** you'd like to see on image to identify what it is.
		      - `cap="example text"`
		 - Example `<img src="/image?res="500x128"&col="126,103,153"&cap="example Text">`

- Funcs
   - `{{md "string example"}}`:  takes in a markdown formatted string and outputs safe html.

- JSON Configuration
  - **config.json**:
    -  Set layout/index template
    - Set CSS and JS libs
    - Set Title and other layout info
  - **pages.json**:
    - map of objects of "page endpoint" to and template page name as well as json data file.
  	-  Data:```[{"home": {"tmpl_define": "home.gohtml", "data": "home.json"}}]  ```
  	- Frontend: ``` <a href="/home"> ```
  	- Generated In Backend:
        - ```
             data := ParseJsonFile("home.json")
             g.GET("/home", HTML("home.gohtml", data))
          ```

  - **\[page name\].json**: - Data that will be rendered in the template. Formatting and contents at user's discretion.

- Themes linking css filename and assigning it via get-query via `ThemeQ` (see source) at root. GET-Queries will be handled better soon.
- Render Pages to `dist/` structured as:
```
/dist
├─ index.html
└─ static/
    ├─ css/
    │   └─ index.css
    └─ js/
        └─ index.js
```

### What are it's guts made of?
The one included in this repo is currently made up of:
- [github.com/fogleman/gg](https://github.com/fogleman/gg)
- [github.com/gin-gonic/gin](https://github.com/gin-gonic/gin)
- [github.com/golang/freetype](https://github.com/golang/freetype)
- [github.com/russross/blackfriday](https://github.com/russross/blackfriday)
- [github.com/yosssi/gohtml](https://github.com/yosssi/gohtml)
- [golang.org/x/image](https://golang.org/x/image)
- [golang.org/x/net](https://golang.org/x/net)