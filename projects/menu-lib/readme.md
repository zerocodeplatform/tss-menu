
To get hands on the code before installing, [Click here.](https://github.com/zerocodeplatform/tss-menu/wiki/View-functionality-and-access.)


Use **`npm i tssmenu-lib`** to install this menu.

If your project does not contains
 primeng installed, install it using below command
***
**`npm i primeng`**
***

 After installing import the below modules, in app-module.ts or any module file you are accessing it in.
***
**`import { MenuLibModule } from 'tssmenu-lib';`**
***
Under component import 'MenuInterface' and create variable options of this interface type.
***
**`import { MenuInterface } from 'tssmenu-lib/menu-interface';`**
after importing:
**`options : MenuInterface;`**
***

Use this selector in html:
***
**`<lib-menu-lib [options]="options"></lib-menu-lib>`**
***

variable `options` consists of : `items` and `styling`.
***

`options={`
`"styling": 'horizontal/vertical',`
`"items" : [`
        `{`
            `label: 'File',`
            `icon: 'fa-file-o',`
            `items: [{`
                    `label: 'New', `
                    `icon: 'fa-plus',`
                    `items: [`
                        `{label: 'Project'},`
                        `{label: 'Other'},`
                    `]`
                `},`
                `{label: 'Open'},`
                `{separator:true},`
                `{label: 'Quit'}`
            `]`
        `},`
        `{`
            `label: 'Edit',`
            `icon: 'fa-edit',`
            `items: [`
                `{label: 'Undo', icon: 'fa-mail-forward'},`
                `{label: 'Redo', icon: 'fa-mail-reply'}`
            `]`
        `},`        `
    `]`
`}`

