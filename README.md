# adapt-custom-completion  
    
An extension provides customized course completion.

## Installation

First, be sure to install the [Adapt Command Line Interface](https://github.com/cajones/adapt-cli), then from the command line run:

    adapt install custom-completion

Or, download the ZIP and extract into the src > extensions directory and run an appropriate Grunt task.


### Usage

Add `_customCompletion` in config.json:

```
	"_completionCriteria": {
        "_requireContentCompleted": true,
        "_requireAssessmentCompleted": false,
        "_customCompletion" : {
            "_requirePageVisited": "co-10",
            "_requireComponentVisited": "c-10"
        }
    }
```

* `_requiresPageVisited` Completes the course on a page visit.
* `_requiresComponentVisited` Completes the course on a component visit. In progress...
* `_requires....` Contributors are welcome to add more custom completion scenarios.


### Limitations

Developed to work with framework, `properties.schema` requires to edit compatiblity with authoring tool. Contributors are welcome.

### Browser/platform specification

Intended to develop standard Adapt browser/devices specification.

----------------------------
**Version:**  1.0.1 

**Framework version:** >=3.2

**Author/maintainer:** Kunj B Sharma <kunjsharma@hotmail.com>     
