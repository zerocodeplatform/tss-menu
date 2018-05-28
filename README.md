## Use "npm i tssmenu-lib" to install this menu.

After installing import the below modules.
###  import { MenubarModule } from 'primeng/menubar';
###  import { ImgLibModule } from 'tss-img-lib';

Use this selector in html:#  `<lib-menu-lib [options]="options"></lib-menu-lib>`

variable "options" consists of : "items" and "styling".

"styling": 'horizontal/vertical',
"items" : [
        {
            label: 'File',
            icon: 'fa-file-o',
            items: [{
                    label: 'New', 
                    icon: 'fa-plus',
                    items: [
                        {label: 'Project'},
                        {label: 'Other'},
                    ]
                },
                {label: 'Open'},
                {separator:true},
                {label: 'Quit'}
            ]
        },
        {
            label: 'Edit',
            icon: 'fa-edit',
            items: [
                {label: 'Undo', icon: 'fa-mail-forward'},
                {label: 'Redo', icon: 'fa-mail-reply'}
            ]
        },
        {
            label: 'Help',
            icon: 'fa-question',
            items: [
                {
                    label: 'Contents'
                },
                {
                    label: 'Search', 
                    icon: 'fa-search', 
                    items: [
                        {
                            label: 'Text', 
                            items: [
                                {
                                    label: 'Workspace'
                                }
                            ]
                        },
                        {
                            label: 'File'
                        }
                ]}
            ]
        }        
    ]

