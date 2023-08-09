NONO LLM
--------

NONO LLM implments question and answer pairs based upon the FLAIR framework. The FLAIR framework is described in the paper [Bot or Human? Detecting ChatGPT Imposters with A Single Question](https://arxiv.org/abs/2305.06424)

## Currently implemented methods

* Positioning 

### Not yet implemented methods

* Counting
* Substitution
* Random Editing
* Noise Injection
* ASCII Art

## Usage

```js
import { generateQuestionAnswer } from "nono-llm";

const { question, answer } = generateQuestionAnswer();
```
