
const brand = [
    {name: "HP", value:"hp"},
    {name:"Acer",value:"acer"},
    {name:"Razer",value:"razer"},
    {name:"Apple",value:"apple"},
    {name:"Microsoft",value:"microsoft"},
    {name:"Dell",value:"dell"},
    {name:"Lenevo",value:"lenevo"},
    {name:"MSI",value:"msi"},
    {name:"Gigabyte",value:"gigabyte"},
    {name:"Huawei",value:"huawei"},
    {name:"AVITA",value:"avita"},
    {name:"Xiaomi",value:"xiaomi"},
    {name:"Walton",value:"walton"},
    {name:"Asus", value:"asus"},
]

const processor_type = [
            {name:"Intel", value:"INTEL"},
            {name: "AMD", value:"AMD"},
            {name:"Apple",value:"APPLE"}
        ]


const processor_model = 
        [
            {name:"Intel Core i3", value:"Intel Core i3"},
            {name: "Intel Core i5", value:"Intel Core i5"},
            {name:"Intel Core i7",value:"Intel Core i7"},
            {name:"Intel Core i9", value:"Intel Core i9"},
            
            {name:"AMD Ryzen 5",value:"AMD Ryzen 5"},
            {name:"AMD Ryzen 7", value:"AMD Ryzen 7"},
            {name: "AMD Ryzen 9", value:"AMD Ryzen 9"},
            {name:"Apple M1",value:"Apple M1"},
            {name:"Apple M1 Pro",value:"Apple M1 Pro"},
            {name:"Apple M1 Max",value:"Apple M1 Max"},
            {name:"Apple M2",value:"Apple M2"},
            {name:"Apple M2 Pro",value:"Apple M2 Pro"},
            {name:"Apple M2 Max",value:"Apple M2 Max"},
            {name:"Apple M3",value:"Apple M3"},
            {name:"Apple M3 Pro",value:"Apple M3 Pro"},
            {name:"Apple M3 Max",value:"Apple M3 Max"},
]

const generation = [
            {name:"Intel 10th Gen", value:"Intel 10th Gen"},
            {name: "Intel 11th Gen", value:"Intel 11th Gen"},
            {name:"Intel 12th Gen",value:"Intel 12th Gen"},
            {name: "Intel 13th Gen", value:"Intel 13th Gen"},
            {name:"Intel 14th Gen", value:"Intel 14th Gen"},
            {name: "Ryzen 3000 Series", value:"Ryzen 3000 Series"},
            {name:"Ryzen 4000 Series",value:"Ryzen 4000 Series"},
            {name: "Ryzen 5000 Series", value:"Ryzen 5000 Series"},
            {name: "Ryzen 6000 Series", value:"Ryzen 6000 Series"},
            {name:"Ryzen 7000 Series",value:"Ryzen 7000 Series"},
            {name: "Ryzen 8000 Series", value:"Ryzen 8000 Series"},
            
        ]
const display_size = [
            {name:"13.3", value:"13.3"},
            {name: "14", value:"14"},
            {name:"15.6",value:"15.6"},
            {name: "16", value:"16"},
            {name:"17.3",value:"17.3"}
        ]
const display_type = [
            {
                name:"LED",value:"LED"
            },
            {name:"OLED",value:"OLED"},
            {name:"AMOLED",value:"AMOLED"},

        ]

const ram = [
            
            {name:"4 GB",value:"4 GB"},
            {name:"8 GB",value:"8 GB"},
            {name:"16 GB",value:"16 GB"},
            {name:"32 GB",value:"32 GB"},
            {name:"36 GB",value:"36 GB"},
            {name:"48 GB",value:"48 GB"},
            {name:"64 GB",value:"64 GB"},
            {name:"128 GB",value:"128 GB"},
        ]

const ram_type = [
            
            {name:"DDR4",value:"DDR4"},
            {name:"DDR5",value:"DDR5"},
        ]

const hdd = [
            
            {name:"Select",value:""},
            {name:"1 TB",value:"1 TB"},
            
        ]
const queryHDD = [
        
            {name:"1 TB",value:"1 TB"},
            
        ]
const ssd = [
            
            {name:"128 GB",value:"128 GB"},
            {name:"256 GB",value:"256 GB"},
            {name:"512 GB",value:"512 GB"},
            {name:"1 TB",value:"1 TB"},
            {name:"2 TB",value:"2 TB"},
            {name:"4 TB",value:"4 TB"},
            {name:"8 TB",value:"8 TB"},
        ]
const graphics = [
            
            {name:"Shared / Integrated",value:"Shared / Integrated"},
            {name:"Dedicated 2GB",value:"Dedicated 2GB"},
            {name:"Dedicated 4GB",value:"Dedicated 4GB"},
            {name:"Dedicated 6GB",value:"Dedicated 6GB"},
            {name:"Dedicated 8GB",value:"Dedicated 8GB"},
            {name:"Dedicated 12GB",value:"Dedicated 12GB"},
            {name:"Dedicated 16GB",value:"Dedicated 16GB"},
        ]

const operating_system = [
            
            {name:"Free Dos",value:"free-dos"},
            {name:"Windows",value:"windows"},
            {name:"macOS",value:"macOS"},
            {name:"ChromeOS",value:"ChromeOS"},
        ]

const features = [
    
    {name:"Backlit Keyboard",value:"backlit-keyboard"},
    {name:"Finger Print",value:"finger-print"},
    {name:"360°",value:"360°"},
    {name:"Touch Screen",value:"touch-screen"},
    {name:"Type-C Port",value:"type-c-port"},
]
export const productManager = {brand, processor_type, processor_model, ram, ram_type, generation, display_size, display_type, hdd, queryHDD, ssd, graphics, operating_system, features}