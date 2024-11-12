const products = [
    {
        name: "Aqua Inverter Washing Machine 11 kg AQD-DDW1100J BK",
        image:
          "https://cdn.tgdd.vn/Products/Images/1944/312779/aqua-inverter-11kg-aqd-ddw1100j-bk11-700x467.jpg",
        description:
             "The Aqua Inverter 11 kg Washing Machine (Model AQD-DDW1100J BK) features an energy-efficient Inverter technology, ensuring powerful cleaning performance while saving electricity. It offers a large 11 kg capacity, ideal for large families, and comes with a sleek black design.",
        price: 350,
        countInStock: 4,
        rating: 4.5,
        numReview: 6,
      },
    
      {
        
        name: " The Aqua Inverter 12 kg Washing Machine (Model AW12-B4959U1K(B)",
        image:
          "https://cdn.tgdd.vn/Products/Images/1944/326675/aqua-12-kg-aw12-b4959u1k-b-1-700x467.jpg",
        description:
          "The Aqua Inverter 12 kg Washing Machine (Model AW12-B4959U1K(B)) is ideal for families with over 7 members. It features a large 525 mm drum for effective cleaning, an ABT anti-bacterial door gasket to prevent mold and bacteria, and a Pillow Drum design to reduce fabric damage. The Refresh mode keeps clothes looking new, while Inverter technology ensures quiet, energy-efficient operation. Conveniently, it also connects to Wi-Fi via the Haismart app.",
        price: 400,
        countInStock: 2,
        rating: 4,
        numReview: 6,
      },
    
      {
        
        name: "The Aqua Inverter 469L Multi Door Refrigerator (Model AQR-M536XA(GB))",
        image:
          "https://cdn.tgdd.vn/Products/Images/1943/318554/tu-lanh-aqua-inverter-469-lit-aqr-m536xa-gb-2-1-700x467.jpg",
        description:
          "The Aqua Inverter 469L Multi Door Refrigerator (Model AQR-M536XA(GB)) features advanced inverter technology for energy-efficient performance. With a spacious 469-liter capacity, it offers ample storage across multiple compartments. The multi-door design ensures easy access and organization of food. This refrigerator provides optimal cooling and freshness, while its sleek black finish adds a modern touch to your kitchen.",
        price: 6500,
        countInStock: 4,
        rating: 4,
        numReview: 6,
      },
      {
        
        name: "The LG Inverter 635L Side-by-Side Refrigerator (Model GR-D257WB)",
        image:
          "https://cdn.tgdd.vn/Products/Images/1943/271982/lg-inverter-635-lit-gr-d257wb-3-1-700x467.jpg",
        description:
          "The LG Inverter 635L Side-by-Side Refrigerator (Model GR-D257WB) offers a spacious design with a large 635-liter capacity, perfect for larger families. It features advanced Inverter technology for energy-efficient and quiet operation. The side-by-side layout allows for easy access to both the refrigerator and freezer sections, ensuring optimal organization and cooling performance. Its sleek black finish adds a modern touch to any kitchen.",
        price: 1000,
        countInStock: 4,
        rating: 4,
        numReview: 6,
      },
      {
        
        name: "The Aqua 90L Refrigerator (Model AQR-D100FA(BS))",
        image:
          "https://cdnv2.tgdd.vn/mwg-static/dmx/Products/Images/1943/328723/tu-lanh-aqua-90-lit-aqr-d100fa-bs-1-638610658568703369-700x467.jpg",
        description:
          "The Aqua 90L Refrigerator (Model AQR-D100FA(BS)) is a compact and efficient cooling solution, ideal for small spaces or as a secondary fridge. It offers a 90-liter capacity with a sleek black design, providing convenient storage for everyday essentials. The refrigerator is equipped with energy-efficient features, ensuring reliable performance while helping to reduce power consumption.",
        price: 200,
        countInStock: 4,
        rating: 4,
        numReview: 6,
      },
      {
        
        name: "Sunhouse SHD7727 Air Cooler 150W",
        image:
          "https://cdn.tgdd.vn/Products/Images/7498/199117/sunhouse-shd7727-kg-1-700x467.jpg",
        description:
          "The Sony 4K Google TV 55-inch (Model K-55S30) offers stunning 4K resolution for exceptional picture quality. With Google TV integration, it provides easy access to streaming apps, content recommendations, and voice control via Google Assistant. The 55-inch display ensures an immersive viewing experience, perfect for home entertainment. It also supports various smart features for seamless connectivity and convenience.",
        price: 200,
        countInStock: 4,
        rating: 4,
        numReview: 6,
      },
      {
        
        name: "Daikiosan DM102 Air Cooler 110W",
        image:
          "https://cdn.tgdd.vn/Products/Images/7498/320996/quat-dieu-hoa-daikiosan-dm102-1-700x467.jpg",
        description:
          "The Daikiosan DM102 Air Cooler (110W) is an efficient and eco-friendly cooling device ideal for medium-sized spaces. With a 110W power output, it provides powerful airflow while saving energy. It features a spacious water tank for prolonged cooling, easy portability with built-in wheels, and simple controls for adjusting cooling levels. This air cooler is perfect for both home and office, offering a cost-effective alternative to air conditioning.",
        price: 650,
        countInStock: 4,
        rating: 4,
        numReview: 6,
      },
      {
        
        name: "The LG PuriCare 360° Air Purifier (Model AS60GHWG0)",
        image:
          "https://cdn.tgdd.vn/Products/Images/5473/303100/may-loc-khong-khi-lg-puricare-360-hit-as60ghwg0-41w-2-700x467.jpg",
        description:
          "The LG PuriCare 360° Air Purifier (Model AS60GHWG0) delivers powerful 360-degree air purification, ideal for medium to large rooms. With a 41W power consumption, it efficiently removes allergens, dust, and pollutants, providing fresh and clean air. Its unique cylindrical design allows for optimal airflow and thorough filtration, while smart features enable easy control and monitoring of air quality. This purifier is a stylish and effective addition to any home.",
        price: 200,
        countInStock: 4,
        rating: 4,
        numReview: 6,
      },
      {
        
        name: "The Electrolux Air Purifier (Model EP32-25UGA)",
        image:
          "https://cdn.tgdd.vn/Products/Images/5473/324388/may-loc-khong-khi-electrolux-ep32-25uga-25w-2-700x467.jpg",
        description:
          "The Electrolux Air Purifier (Model EP32-25UGA) is a compact, efficient solution for cleaner air, operating at 25W power. It effectively removes dust, allergens, and pollutants, making it ideal for smaller rooms. With a modern, sleek design, it blends seamlessly into any space while ensuring a healthier indoor environment. Easy to use and energy-efficient, it’s perfect for daily air purification needs.",
        price: 98,
        countInStock: 4,
        rating: 4,
        numReview: 6,
      },
    
      {
        
        name: "The TP-Link Tapo C210 3MP 360° IP Camera ",
        image:
          "https://cdn.tgdd.vn/Products/Images/4728/242566/camera-ip-360-do-3mp-tp-link-tapo-c210-2-1-750x500.jpg",
        description:
          "The TP-Link Tapo C210 3MP 360° IP Camera offers high-resolution 3MP video quality with full 360-degree coverage, ideal for monitoring large areas. It features pan and tilt capabilities, night vision, and motion detection to capture clear footage day and night. With the Tapo app, users can view live video, receive alerts, and control the camera remotely, making it a reliable, user-friendly option for home security.",
        price: 80,
        countInStock: 4,
        rating: 4,
        numReview: 6,
      },
      {
        
        name: "The TP-Link Tapo C520WS 4MP 360° Outdoor IP Camera",
        image:
          "https://cdn.tgdd.vn/Products/Images/4728/327949/camera-ip-ngoai-troi-360-do-4mp-tp-link-tapo-c520ws-1-750x500.jpg",
        description:
          "The TP-Link Tapo C520WS 4MP 360° Outdoor IP Camera is designed for robust outdoor security, offering high-definition 4MP resolution for clear, detailed video. With 360-degree coverage, it provides full monitoring of outdoor areas. The camera is equipped with advanced features like color night vision, motion detection, two-way audio, and IP65 weather resistance for reliable performance in various conditions. Easy to control via the Tapo app, it’s an ideal choice for comprehensive outdoor surveillance.",
        price: 98,
        countInStock: 4,
        rating: 4,
        numReview: 6,
      },
      {
        
        name: "ROSA Crystal A10 Ryzen 3 3200G/8GB/256GB/Win11 Pro",
        image:
          "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/5698/329465/rosa-crystal-a10-ryzen-3-3200g-8gb-256gb-win11-1-638622759251342040-750x500.jpg",
        description:
          "The ROSA Crystal A10 Desktop features a Ryzen 3 3200G processor, providing reliable performance for everyday tasks and light multitasking. It comes with 8GB of RAM and a 256GB SSD, ensuring smooth operation and quick boot times. Pre-installed with Windows 11 Pro, it offers enhanced security and productivity features for business or personal use. This desktop is a solid choice for users seeking an efficient, budget-friendly PC for home or office applications.",
        price: 300,
        countInStock: 4,
        rating: 4,
        numReview: 6,
      },
      {
        
        name: "ROSA Crystal A20 Ryzen 5 5500GT/16GB/256GB/Win 11 Pro",
        image:
          "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/5698/329471/rosa-crystal-a20-ryzen-5-5500gt-16gb-256gb-win-11-1-638622889321919262-750x500.jpg",
        description:
          "The ROSA Crystal A20 Desktop is powered by the Ryzen 5 5500GT processor, offering strong performance for multitasking, productivity, and light gaming. Equipped with 16GB of RAM and a 256GB SSD, it ensures fast data access, smooth application performance, and efficient operation. With Windows 11 Pro pre-installed, this PC provides advanced security and productivity tools, making it an excellent choice for both work and home use.",
        price: 320,
        countInStock: 4,
        rating: 4,
        numReview: 6,
      },
      {
        
        name: "The Toshiba TWP-W2396SVN(M) RO Water Purifier ",
        image:
          "https://cdn.tgdd.vn/Products/Images/3385/324509/may-loc-nuoc-ro-nong-nguoi-lanh-toshiba-twp-w2396svn-m-10-loi-1-700x467.jpg",
        description:
          "The Toshiba TWP-W2396SVN(M) RO Water Purifier offers hot, cold, and room temperature water options, making it versatile for various needs. It features a 10-stage filtration system, ensuring clean and safe drinking water by removing impurities, bacteria, and heavy metals. With a modern, compact design, it fits well in any kitchen or office, providing convenient access to purified water at the desired temperature. This purifier is an ideal choice for families or workplaces that prioritize health and convenience.",
        price: 500,
        countInStock: 4,
        rating: 4,
        numReview: 6,
      },
      {
        
        name: "The Kangaroo KG10A18 RO Water Purifier",
        image:
          "https://cdn.tgdd.vn/Products/Images/3385/314933/may-loc-nuoc-ro-nong-nguoi-lanh-kangaroo-kg10a18-10-loi-1-700x467.jpg",
        description:
          "The Kangaroo KG10A18 RO Water Purifier provides hot, cold, and ambient water options, catering to diverse drinking needs. Equipped with a 10-stage filtration system, it effectively removes contaminants, bacteria, and heavy metals, ensuring safe and clean drinking water. With its modern design and convenient features, it’s suitable for home or office use, delivering purified water at your preferred temperature. This purifier is a practical solution for those who value health, convenience, and high-quality water.",
        price: 500,
        countInStock: 4,
        rating: 4,
        numReview: 6,
      },
      {
        
        name: "The Toshiba TWP-N2396SVN(W) RO Water Purifier",
        image:
          "https://cdn.tgdd.vn/Products/Images/3385/324507/may-loc-nuoc-ro-toshiba-twp-n2396svn-w-10-loi-1-700x467.jpg",
        description:
          "The Toshiba TWP-N2396SVN(W) RO Water Purifier features a 10-stage filtration system, ensuring high-quality, clean drinking water by removing impurities, bacteria, and heavy metals. Its sleek, modern design fits seamlessly into any kitchen. This purifier provides room temperature water and is ideal for households seeking a reliable, efficient, and compact water purification solution for daily hydration needs.",
        price: 98,
        countInStock: 4,
        rating: 4,
        numReview: 6,
      },
]

module.exports = products;