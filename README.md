<table align="right">
  <tr>
    <td>
      <a href="https://github.com/ananuness/step-form/blob/main/README.pt-br.md" width="60px">pt-br 🇧🇷</a>
    </td>
  </tr>
</table>
  
<h1 align="center">🛍 Step Form</h1>

<p align="center">
  An abstraction of a form commonly used in ecommerce, with the steps of personal 
  data, address and payment method (involving only card payments). 🛒
</p>

<p align="center">
 <a href="#books-subjects">Subjects</a> • 
 <a href="#desktop_computer-demonstration">Demonstration</a> •
 <a href="#building_construction-structure">
  Structure
 </a> •
 <a href="#clipboard-validations">Validations</a> •
 <a href="#woman_technologist-achievements-difficulties-and-improvements">
  Achievements, difficulties and improvements
 </a>
</p>

## :books: Subjects

- HTML
- CSS
- JavaScript (Arrays, Objects, DOM and Fetch API)
- Regex (Capturing groups, replace method and its use, backreferences)

## :desktop_computer: Demonstration

<!-- video here
<p>Or access it <a href="#">here</a>.</p> -->

## :building_construction: Structure

```bash
    ├── assets
    │    ├── flags
    │    ├── icons
    │    └── images
    │
    ├── css
    │    ├── components
    │    │     ├── button.css
    │    │     ├── calendar.css
    │    │     ├── input.css
    │    │     ├── label.css
    │    │     └── stepper.css
    │    │
    │    ├── form.css
    │    ├── global.css
    │    ├── payment.css
    │    ├── resume.css
    │    └── root.css
    │
    ├── js
    │    ├── components
    │    │     ├── calendar.js
    │    │     ├── form
    │    │     └── stepper.js
    │    │
    │    ├── pages
    │    │     ├── address.js
    │    │     ├── payment.js
    │    │     ├── personal-data.js
    │    │     └── resume.js
    │    │
    │    ├── utils
    │    │     ├── create-element.js
    │    │     └── formatter.js
    │    │
    │    └── validations
    │          ├── card-flag.js
    │          ├── date.js
    │          ├── input-mask.js
    │          └── inputs.js
    │
    ├── pages
    │    ├── address.html
    │    ├── payment.html
    │    └── resume.html
    │
    ├── index.html
    ├── LICENSE
    ├── package.json
    └── README.md
```

## :clipboard: Validations

<p>
  Most of the validations were done using custom functions and regex masks in 
  the inputs, while the user types (<code>onInput</code>) or when the input loses 
  focus (<code>onChange</code>) for a more immediate response, optimizing the 
  user's time, facilitating and limiting what is entered in a simple, visually 
  intuitive and pleasant way, in addition to ensuring greater tolerance to errors 
  in the fields entered.
</p>

> The onInput and onChange events are similar, but the main difference is that
> onInput occurs immediately after the input value changes, while onChange occurs
> when the input loses focus. Another difference is that onChange also works on
> `<select>` elements.

### Input masks

<p>
  For most masks, the implementation was based on the concept of 
  <em>regex capturing groups</em> along with the <code>.replace()</code> method 
  which, at each value change, checks and, when necessary, add characteristic 
  symbols using the temporary variables that are created and enumerated according 
  to the order of opening parentheses in the expression.
</p>
<p>
  Explaining better, capture groups are constructed by placing the pattern to be
  captured in parentheses. Example:
</p>

```js
const phone = (value) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d)/, "$1-$2")
    .replace(/-(\d{4})(\d)/, "$1");
};
```

<p>
  The substring corresponding to the group is saved in a temporary "variable",
  which can be accessed <strong>within</strong> the same regex using a backslash 
  and the capturing group number, such as <code>/(\d) \1/</code> or accessing 
  through the notation <code>$(group number)</code>, which is used in the replace 
  method. Remembering that the enumeration is according to the position of its 
  opening parentheses (from left to right), starting at 1:
</p>

```js
  .replace(/(\d{2})(\d)/, "($1) $2")
```

<p>
  This means that we want the first alphanumeric with size equal to 2 to be 
  placed in parentheses and the next value entered to be separated from the first 
  group with a space. We call these <em>backreferences</em>.
</p>

### Card brands

<p>
  Regarding the method to validate and identify the card brand that I chose to 
  follow, I inform you that it is not very recommended, as it is based on 
  validating the card's BIN (the first 6 digits of the card number) in regex and 
  BINs may change over the years. Furthermore, working with regex on this type 
  of variable data is not scalable or easy to maintain.
</p>
<p>
  Before you ask, I chose this method because it is independent of other services 
  and, consequently, will not present future unavailability, despite possible
  incompatibilities that may occur in the available brands.
</p>
<p>
  But for those who are interested in the services, I found some APIs that offer 
  free tier:
</p>

| API                                                    | Limitation                                                                                             |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| [BIN Codes](https://www.bincodes.com/api-bin-checker/) | Registration required and limit of 20 requests per day                                                 |
| [BINLIST.NET](https://binlist.net/)                    | No need to register, but it has stopped being updated (2023) and has a limit of 10 requests per minute |
| [bincheck.io](https://bincheck.io/api)                 | Registration required and limit of 1000 requests per month                                             |

## :woman_technologist: Achievements, difficulties and improvements

- ☀️ Achievements:

  - Project structure organization;
  - Providing valuable error feedback to the user;
  - Limiting user error margins through the use of masks;
  - Creative solution for "simulating states" using only pure JavaScript.

- 🌧️ Difficulties:

  - Control error states for the inputs;
  - Establish a well-organized structure for the scripts and CSS folder;
  - Apply the _Single Responsibility_ concept from SOLID;
  - Find reliable information to validate payment-related fields;
  - Implement regex to create masks for the inputs and search for information on
    how to implement it using pure JavaScript in a visually pleasing way for the
    fields.

- 🌈 Improvements:

  - When the user goes back a step, ensure that the filled information remains
    in the fields;
  - When the user leaves the page or clicks to go back, notify that the data
    from the current step will be lost before proceeding;
  - Enhance validation accuracy by utilizing one of the APIs mentioned in the
    Validation section in the [Card brands](#card-brands).

<hr>

<p align="center">
  Made with 💜 by
  <a align="center" href="https://www.linkedin.com/in/ana-beatriz-nunes/">
    Ana Beatriz Nunes
  </a>
</p>
