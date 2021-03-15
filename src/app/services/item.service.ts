import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from '../models/item.models';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  //itemsInService = [{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/QVUAAOSwh-lfa1DE/s-l225.webp","title":"Men's Athletic Sneakers Casual Sports Running Shoes Outdoors Tennis Gym Trainers","price":17.99,"category":"shoes"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/8LAAAOSwbcBduVRC/s-l225.webp","title":"Fashion Men's Sports Speedcross Athletic Running Hiking Casual Shoes Sneakers","price":26.45,"category":"shoes"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/BoQAAOSwNqlgIcAm/s-l225.webp","title":"New Converse All Star MENS & WOMENS Hi Top Canvas Chuck Taylor Trainers Shoes","price":13.9,"category":"shoes"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/~XEAAOSwbSFe3icd/s-l225.webp","title":"Under Armour Project Rock 2 Training Sneakers Shoes Cross Training Shoes US7-11","price":39.99,"category":"shoes"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/sb0AAOSwbqBec0dO/s-l225.webp","title":"New Men's Salomon Speedcross 3 Athletic Running Sports Outdoor Hiking Shoes","price":17.49,"category":"shoes"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/LekAAOSwCSVgGqMW/s-l225.webp","title":"MENS HIKING BOOTS NEW WALKING ANKLE WIDE FIT TRAIL TREKKING TRAINERS SHOES SIZE","price":26.39,"category":"shoes"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/XXIAAOSwOape7bv8/s-l225.webp","title":"Mens Salomon snowcross 2 CS Running Outdoor snow boots High top Sports Shoes New","price":39.99,"category":"shoes"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/xs8AAOSwXK1gGQnc/s-l225.webp","title":"HOT Salomon SpeedCross 3 CS running shoes outdoor off-road Athletic Hiking Shoes","price":40.69,"category":"shoes"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/DwUAAOSwWnBf-Ctf/s-l225.webp","title":"All Star Converse Unisex Chuck Taylor Hi Top Black Lace Up shoes Trainers UK","price":31.02,"category":"shoes"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/r04AAOSwMKxfZMnv/s-l225.webp","title":"Mens outdoor Salomon Speedcross 5 GTX Nocturne Athletic Running Sports Shoes Hot","price":39.99,"category":"shoes"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/IcYAAOSwsQJe6c4f/s-l225.webp","title":"Mens Trainers Sports Athletic Running Hiking Casual Shoes Sneakers Walking UK SZ","price":25.63,"category":"shoes"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/Y4wAAOSwPkhdvdks/s-l225.webp","title":"Lonsdale Mens Lambo Trainers Sports Shoes Suede Lace Up Casual Everyday","price":41.77,"category":"shoes"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/-vkAAOSwk69fbcMd/s-l225.webp","title":"Man Woman Running Shoes Walking Gymnastics Sports Casual Sneakers D","price":26.65,"category":"shoes"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/pzkAAOSwbHpf7Z5P/s-l225.webp","title":"Men’s Sports Running Shoes Sneakers Gym Fitness Casual Shoes Trainers Slip on SZ","price":15.54,"category":"shoes"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/QSAAAOSwdCdgBSir/s-l225.webp","title":"Air Jordan1 Scarpe Da Ginnastica Da Uomo Retro High OG Mid Sneakers Fashion","price":72.7,"category":"shoes"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/jjUAAOSwnFJfzOKY/s-l225.webp","title":"Womens Skechers Summits Lace Up Memory Foam Walking Sports Trainers Shoes Size","price":62.65,"category":"shoes"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/mTwAAOSw9htffuLR/s-l225.webp","title":"Slazenger Mens V100 Golf Shoes Spiked Lace Up Comfortable Fit","price":41.77,"category":"shoes"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/3oYAAOSwEqlfKPvf/s-l225.webp","title":"Sneakers Tennis Mens And Womens for leisure in Breathable Mesh","price":22.41,"category":"shoes"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/cXMAAOSwUJtgGkDI/s-l225.webp","title":"Converse Chuck Taylor All Star Hi Top Black Lace Up Canvas Trainers Unisex Shoes","price":27.84,"category":"shoes"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/nC4AAOSwprZf9ukx/s-l225.webp","title":"Converse Women Men All Star Low Tops Chuck Taylor Trainers Shoes Unisex All Size","price":27.84,"category":"shoes"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/dVEAAOSwNqlgIj8m/s-l225.webp","title":"[New Balance] 530 Retro Running Shoes Sneakers  - White (MR530SG)","price":89.91,"category":"shoes"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/upkAAOSwXW9gAZ0I/s-l225.webp","title":"Kappa Shoes Sneakers Man Woman LOGO OLMER Walking Low Cut","price":22.19,"category":"shoes"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/U1gAAOSwDtNf~xT9/s-l225.webp","title":"Superga Shoes Sneakers Man Woman 4832-efglu Tennis Sport LDL Low","price":24.23,"category":"shoes"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/oEwAAOSwYshf~v~b/s-l225.webp","title":"Superga Shoes Gymnastics Man Woman 2750-Cotu Panatta Tennis Sport PNA Sneaker","price":24.23,"category":"shoes"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/4RYAAOSwvHJgBXeg/s-l225.webp","title":"Mens Air Bubble Trainers Shock Absorbing Running Gym Shoes Size","price":23.61,"category":"shoes"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/qYcAAMXQLs5Ro3LM/s-l225.webp","title":"New Cozy High elasticity gel Zoom Air tech Sports Insoles for shoes and trainers","price":7.99,"category":"shoes"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/~C8AAOSwlxRfThii/s-l225.webp","title":"Work Boots Men's Safety Shoes Labor Shoes Steel Toe Cap Indestructible Sneakers","price":17.87,"category":"shoes"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/UBAAAOSwXepelUpu/s-l225.webp","title":"New Balance 574 Donna Uomo Scarpe da corsa Tempo libero Escape Sea Sneaker","price":29,"category":"shoes"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/UCwAAOSwQhte6V6R/s-l225.webp","title":"Mizuno Mens Wave Sky 2 Lifestyle Active Running Shoes Sneakers BHFO 1932","price":43.99,"category":"shoes"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/e8UAAOSw70FgEQzs/s-l225.webp","title":"NEW Men's Salomon Speedcross 4 Athletic Running Sports Outdoor Breathable Shoes","price":30.19,"category":"shoes"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/EpAAAOSwrpVgE9oy/s-l225.webp","title":"Asics Gel Venture 7 SPS shoes shoes schuhe man Trail Running Kayano ninbus","price":69.08,"category":"shoes"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/E9gAAOSwmsFfz~X0/s-l225.webp","title":"SAUCONY MEN'S ENDORPHIN SPEED RUNNING SHOES,NIB,DS,WHITE/MUTANT","price":204.99,"category":"shoes"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/ckUAAOSwOqZfMr~D/s-l225.webp","title":"Karrimor Mens Mount Low Mens Walking Training Shoes Trainers","price":48.75,"category":"shoes"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/iIUAAOSwpupgLLpq/s-l225.webp","title":"Nike shoes athletic sport shoes sneakers air max excee white lifestyle","price":83.37,"category":"shoes"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/j9sAAOSwpKJgK0sR/s-l225.webp","title":"Patrick Ewing Size 8 Mens REd/ Black Lace Up High Top Shoes 1ew90154-602","price":19.99,"category":"shoes"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/xxAAAOSwUuRgLHne/s-l225.webp","title":"Brooks Ricochet Yellow Fluorescent DNA Amp Running Shoes Men's Size 8 New","price":79.88,"category":"shoes"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/Lf0AAOSwPo5gCTsf/s-l225.webp","title":"Mens Shock Absorbing Running Trainers Casual Lace Gym Walking Sports Comfy Shoes","price":32.38,"category":"shoes"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/ROYAAOSworRfdAsW/s-l225.webp","title":"New Balance OMN1S Men's Kawhi Leonard White Athletic Basketball Sneakers Shoes","price":126,"category":"shoes"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/SH4AAOSwB9FdNRTg/s-l225.webp","title":"Men's Fashion Outdoor Casual Sport Running Sneakers Tennis Breathable Shoes New","price":40.38,"category":"shoes"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/sxgAAOSwDyhgECmy/s-l225.webp","title":"Men's Trainer Sneaker shoes, Sports Gym Casual Trainers, Outdoor Sneakers","price":20.88,"category":"shoes"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/EisAAOSwUltgLDuN/s-l225.webp","title":"Nike Air Zoom Pegasus 35 TB Running Shoes Navy Blue AO3905-401 Mens Size 12","price":41.65,"category":"shoes"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/2dsAAOSwM65gLB~N/s-l225.webp","title":"MENS HOOKA ONE ONE VALOR TENNIS SHOES SIZE 9.5","price":29.99,"category":"shoes"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/4ugAAOSwUplfLavF/s-l225.webp","title":"DC Legacy OG ADYS100476 Mens White Lace Up Skate Sneakers Shoes","price":49.99,"category":"shoes"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/HIAAAOSwocxf9gKl/s-l225.webp","title":"Supra Skytop 77 High-Top Shoes - Black / Black / Gum","price":97.48,"category":"shoes"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/rMgAAOSwBkBgIOCP/s-l225.webp","title":"adidas UltraBOOST 21 Solar Yellow Pink Men Running Casual Shoes Sneakers FY0848","price":230.26,"category":"shoes"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/eAAAAOSw~xRgGVRF/s-l225.webp","title":"Men's New Balance 515 Trainers in Green","price":54.24,"category":"shoes"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/fi8AAOSw7AhfurXy/s-l225.webp","title":"Nike Air Max Alpha Trainer Cool Grey Black Shoes Trainers","price":62.66,"category":"shoes"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/G1YAAOSwkp9gLEXU/s-l225.webp","title":"Men's Adidas Solar BOOST Running shoes size 9","price":75,"category":"shoes"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/CiMAAOSwA8FgLF2J/s-l225.webp","title":"New Balance 574 Gradient Men's Running Shoes Black With Red ML574RAA Size US 7.5","price":77.95,"category":"shoes"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/3YAAAOSwsidea-3C/s-l225.webp","title":"New Men`s ECCO Strike Golf Shoes Gore-Tex Yak Leather 132104","price":114.99,"category":"shoes"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/CPMAAOSwl5hfofvf/s-l225.webp","title":"Saucony Mens DXN Vintage Suede Fitness Trainers Sneakers Shoes BHFO 3716","price":56,"category":"shoes"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/veAAAOSw8qVfzx0O/s-l225.webp","title":"Reebok Question Mid AI I3 Allen Iverson Retro Men Basketball Shoes Pick 1","price":229.99,"category":"shoes"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/X40AAOSwFZtgLG5U/s-l225.webp","title":"Nike Air Jordan XXXIV 34 Low Pure Money Zion Basketball Shoes CU3473-100 Size 9","price":194.99,"category":"shoes"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/2HEAAOSwkSZgKvNu/s-l225.webp","title":"Men's Nike Revolution 4 Grey Running Shoes Size 11","price":8.99,"category":"shoes"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/VO8AAOSwMcNf~Jdn/s-l225.webp","title":"adidas Harden Vol. 2   Mens Basketball Sneakers Shoes Casual   - Orange - Size","price":129.99,"category":"shoes"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/YmkAAOSwqgJgF~sw/s-l225.webp","title":"New Converse x Carhartt WIP Chuck 70 Hi Shoes (169220C) - Hamilton Brown","price":169.9,"category":"shoes"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/oyYAAOSwdPxgLMoJ/s-l225.webp","title":"Men's Spots Running Shoes Outdoor Walking Athletic Sneakers Jogging Tennis Gym","price":27.99,"category":"shoes"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/x-0AAOSwl89fn9mj/s-l225.webp","title":"2021 Fashion Mens Womens Trainers Flat shoes fashion Sneakers high-top Trainers","price":20.32,"category":"shoes"}];

  
  itemsInService: Item[] = [];
  constructor(private http: HttpClient) { }

  url = "https://webshio-d2d34-default-rtdb.firebaseio.com/items.json";

  saveItemsToDatabase() {
    this.http.put(this.url, this.itemsInService).subscribe();
  }

  getItemsFromDatabase() {
    return this.http.get<Item[]>(this.url);
  }
  addItemToDatabase(item: Item) {
 this.http.post(this.url, item).subscribe();
}
}



// ese!: Item; onAddItem(ese: Item)
// new Item("", "", 0, "")
// new Subject<Item>() this.http.get<Item>()