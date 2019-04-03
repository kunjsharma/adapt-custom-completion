# adapt-custom-completion  
    
An extension provides customized course completion.

# In progress.......  


## Installation

First, be sure to install the [Adapt Command Line Interface](https://github.com/cajones/adapt-cli), then from the command line run:

    adapt install custom-completion

Or, download the ZIP and extract into the src > extensions directory and run an appropriate Grunt task.


### Usage

Add `_customCompletion` in course.json:

```
	"_customCompletion": {
		"_isEnabled": true,
		"title": "Menu",
		"_items": [
	        {
	            "title": "Go to Menu",
	            "_link": ""
	        },
	        {
	            "title": "Presentation Components",
	            "_link": "co-05"
	        },
	        {
	            "title": "Question Components",
	            "_link": "co-10"
	        },
	        {
	            "title": "Adapt Assessment",
	            "_link": "co-15"
	        }
		]
	}
```

* `title` Menu item title
* `_link` Link to page. Empty sends to main menu.


### Limitations

Developed for framework, not tested compatiblity with authoring tool. Contributors are welcome.

### Browser/platform specification

Intended to develop standard Adapt browser/devices specification.

----------------------------
**Version number:**  1.0.1 
**Framework versions:** 4.0.1      
**Author / maintainer:** Kunj B Sharma <kunjsharma@hotmail.com>     
