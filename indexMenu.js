const almuerzoMenu = [
            "Empanada Cortada a Cuchillo", "Ensalada Capresse", "Ensalada Lucho’s Cheff", "Tortillin de Papa", "Papas Cheddar", "Tortilla Española", "Papines Rellenos", "Ensalada Griega", "Empanadilla Gallega de Atún",
             "Bruschetta Mediterránea", "Bruschetta Capresse", "Ensalada Caesar", "Bastones de Muzzarella Rebozados", "Quiché de Calabaza y Muzzarella", "Tacos de Pollo", "Tacos de Ternera", "Quiché de Verduras", "Quiché de Humita", "Crocante de Muzzarella", "Buñuelos de Espinaca y Queso Parmesano",
              "Muzzarellitas", "Empanadas Capresse", "Fatay", "Mayonesa de Ave", "Croquetas de Espinaca y Queso Azul", "Jamón con Ensalada Rusa", "Tarta de Jamón y Queso", "Quesadillas", "Tarta de Verduras", "Mil Hojas de Papa y Panceta"
              
        ];
        almuerzoMenu.push("Crunch de Pollo");
        
        const almuerzoSubMenu = [
            "Puerro y Panceta", "con Ensaladilla", "con Panceta y Verdeo", " y Panceta", "con Ensalada Verde", "con Salsa Alexander", "con Ensaladilla Verde", " con Queso y Panceta", " con Pollo", "con Pico de Gallo", "con Pesto de Albahaca", "con Mojo Rojo", "con Salsa Blanca"
        ];
        almuerzoSubMenu.push(" ");
        
        almuerzoMenu.sort();
        almuerzoSubMenu.sort();
        
        const almuerzoSelect = document.getElementById('almuerzo-select');
        const almuerzoSubMenuSelect = document.getElementById('almuerzo-submenu');
        const cenaSelect = document.getElementById('cena-select');
        const cenaSubMenuSelect = document.getElementById('cena-submenu');
        const postreSelect = document.getElementById('postre-select');
        const postreSubMenuSelect = document.getElementById('postre-submenu');
        
        function addToSelect(item, select) {
            let option = document.createElement('option');
            option.textContent = item;
            select.appendChild(option);
        }
        
        almuerzoMenu.forEach(item => addToSelect(item, almuerzoSelect));
        almuerzoSubMenu.forEach(item => addToSelect(item, almuerzoSubMenuSelect));
        
        const cenaMenu = [
            "Muslo Braseado al Limón", "Muslo al Ajillo", "Muslitos a la Portuguesa", "Muslito Napolitano","Milanesa de Ternera a la Napolitana", "Milanesa de Peceto", "Ravioli de Espinaca Mediterráneo", "Lasagna de Berenjenas", "Bondiola a la Mostaza", "Bondiola Ahumada", "Bondiola Grillada", "Pollo a la Portuguesa",
            "Supremitas", "Pechugas al Verdeo", "Tallarines Mediterráneo", "Tallarines a la Parisienne","Tallarines con Salsa Alfredo",
            "Ñoquis a la Parisienne", "Ñoquis de Papa", "Pizza Libre", 
            "Ravioles de Verdura y Ricota", "Tallarines al Pesto","Raviolon de Ricota y Verduras", "Ravioli Mediterráneo",
             "Lasagna de Carne y Verduras", "Suprema Mariland", "Carré de Cerdo a la Riojana" , "Pastel de Papa y Carne",
             "Vacío al Horno", "Pechugas al Puerro y Queso Azul", "Escalopines de Ternera", "Tallarines al Pesto de Albahaca", 
              "Canelones de Verdura", "Pechugas Rellenas", "Caneloni a la Rossini", "Carne al Horno Braseada", "Carne con Papas a la Criolla", "Pechugas Capresse",
              "Wok de Verduras Mixto", "Albóndigas Pomarola"
        ];
        cenaMenu.push("Tapa de Asado Braseada");
        
        const cenaSubMenu = [
            "con Ensalada del Chef", "con Puré de Batatas", "con Puré de Papas", "con Puré Marmolado", "con Arroz Pilaf", "a la Suiza", "con Queso Gratinado", "con Papas Especiadas", "con Vegetales al Horno", , "con Rúcula, Parmesano y Tomates Cherry",
             "con Panceta y Verdeo", "con Papas a la Provenzal", "con Ensaladilla Verde", "con Ensalada Natural", "con Papas al Natural", "con Salsa Pomodoro",
             "(Champignon, Crema y Blanco de Ave)", "con Puré Mixto", "con Estofado", "con Filetto y Crema", "con Papas Rústicas", "con Papas a la Española","con Arroz Tae", "con Papas Fritas","con Ragú de Ternera", "con Salsa Bolognesa",  "y Salsa Bechamel", "con Salsa Rose",
             "con Papas Bravas y Criolla", "con Tomates Asados", "con Salsa de Puerros", "con Risotto de Verduras", "con Papas a la Crema de Verdeo", "a la Napolitana",
        ];
        
        cenaSubMenu.push(" ");
        
        const postreMenu = [
            "Flan de Naranja", "Helado de Americana","Helado de Chocolate", "Helado Almendrado", "Crepe de Manzanas y Canela",
            "Budín de Pan", "Bombón Suizo", "Brownie de Chocolate", "Ensalada de Frutas", "Mousse de Chocolate", "Crepe de Frutas", "Flan Casero"
            , "Manzanas Asadas", "Duraznos en Almibar", "Compota de Manzanas", "Helado Tricolor", "Copa Helada Suteba", "Copa Helada", "Queso y Dulce Par", "Tiramisú", "Peras al Borgoña", "Cheese Cake", "Trifle de Chocolate"
        ];
        postreMenu.push("Crumble de Manzana y Canela");
        
        const postreSubMenu = [
            "con Dulce de Leche", "con Praline de Frutos Secos", "con Nueces Tostadas", "con Salsa de Chocolate", "con Helado y Nueces Garrapiñadas", "y Nueces", "con Reducción de Vino y Frutos Rojos", "con Coulis de Frutos Rojos", "con Frutas de Estación",
            "con Crema Chantilly", "con Salsa de Frutos Rojos", "de Chocolate", "Mixto", "con Helado", "y Crema de Limón", "con Crema y Canela",
             "y Crema de Caramelo","(Queso, Batata y Membrillo)", "y Crema de Arándanos", "con Crema Oreo"
        ];
        
        postreSubMenu.push(" ");
        
        cenaMenu.sort();
        cenaSubMenu.sort();
        postreMenu.sort();
        postreSubMenu.sort();
        
        cenaMenu.forEach(item => addToSelect(item, cenaSelect));
        cenaSubMenu.forEach(item => addToSelect(item, cenaSubMenuSelect));
        
        postreMenu.forEach(item => addToSelect(item, postreSelect));
        postreSubMenu.forEach(item => addToSelect(item, postreSubMenuSelect));
