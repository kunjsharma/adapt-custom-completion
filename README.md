# adapt-custom-completion  
    
An extension that provides customised course completion: i.e. - learner goes to summary/final page skipping page(s), a component (in progress...) etc. In short, this extension have capability to allows developer to complete the course apart from complete all content and assessment passed criteria that comes with core completion criteria in Adapt. This may useful when course have branching, conditional navigaiton or similar functionality.

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

* `_requirePageVisited` Completes the course on page visit.
* `_requireComponentVisited` Completes the course on component visit. In progress...
* `_require....` Contributors/Suggestions are welcome to add more custom completion scenarios.


### Limitations

Developed to work with framework, `properties.schema` requires to edit compatiblity with authoring tool.

----------------------------
**Version:**  1.0.1  
**Framework version:** >=3.2  
**Author/maintainer:** Kunj B Sharma <kunjsharma@hotmail.com>  
