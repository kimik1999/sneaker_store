var a = [
    {
        code: "A01",
        name: "YEEZY BOOST 350 V2",
        path: "1.2.jpg",
        price: 550,

    },
    {
        code: "A02",
        name: "ULTRA BOOST 4.0 LTD",
        path: "3.jpg",
        price: 310,

    },
    {
        code: "A03",
        name: "Pharrell Williams BBCH",
        path: "1.3.jpg",
        price: 270,

    },
    {
        code: "A06",
        name: "ULTRABOOST CLIMA",
        path: "aa1.jpg",
        price: 240,

    },
    {
        code: "A08",
        name: "NMD_R1 STLT PRIMEKNIT",
        path: "aa3.jpg",
        price: 170,

    },
    {
        code: "N01",
        name: "Nike Air VaporMax Run Utility",
        path: "pn1.jpg",
        price: 190,

    },
    {
        code: "N02",
        name: "Nike Air Max 97",
        path: "pn3.jpg",
        price: 270,

    },
    {
        code: "N03",
        name: "Nike Air Mag 2016",
        path: "pn4.jpg",
        price: 12000,

    },
    {
        code: "N04",
        name: "Nike Air Max 97 Plus",
        path: "pn5a.jpg",
        price: 699,

    },

    {
        code: "N05",
        name: "Air Jordan 1 Retro",
        path: "n1.jpg",
        price: 310,

    },
    {
        code: "N06",
        name: "Nike Air Force 270",
        path: "n1a.jpg",
        price: 135,

    },
    {
        code: "N07",
        name: "Air Jordan 1 Mid",
        path: "n1c.jpg",
        price: 75,

    },
    {
        code: "N08",
        name: "NIKE AIR JORDAN 7",
        path: "n1d.jpg",
        price: 699,

    },
    {
        code: "V01",
        name: "Vans x Marvel Slip On Spiderman",
        path: "va1.jpg",
        price: 65,

    },
    {
        code: "V02",
        name: "Vans x Marvel Authentic",
        path: "va2.jpg",
        price: 75,

    },
    {
        code: "V03",
        name: "Vans x Marvel Hulk",
        path: "va3.jpg",
        price: 65,

    },
    {
        code: "V04",
        name: "Vans x Marvel Captian",
        path: "va4.jpg",
        price: 65,

    },
    {
        code: "V05",
        name: "Vans x Gogh",
        path: "v8.jpg",
        price: 65,

    },
    {
        code: "V06",
        name: "Vans x Gogh",
        path: "v6.jpg",
        price: 65,

    },
    {
        code: "V07",
        name: "Vans x Gogh",
        path: "v7.jpg",
        price: 65,

    },



        ];

        function loadproduct(id) 
        {
            var t=document.getElementById(id);
            for(var i = 5; i < 13; i++)
            {
                var d=document.createElement("div");
                //  Tạo 1 thẻ div và cất nó vào d
                var anh=document.createElement("img");
                anh.src= a[i].path;
                anh.id=a[i].code;
                anh.addEventListener("click", getdetail);
                var h5=document.createElement("h5");
                h5.innerHTML = a[i].name;

                var p2=document.createElement("p");
                p2.innerHTML="$" + a[i].price;

                d.appendChild(anh);
                d.appendChild(h5);
                d.appendChild(p2);
                t.appendChild(d);
                // Đưa thẻ img làm con của div
            }
        }
        function findproduct(ma)
        {
            for(var i=0; i< a.length; i++) {
                if(a[i].code == ma)
                return i;
            }
            return -1;
        }
        function getdetail()
        {
           var ma=event.target.id;
           var pos=findproduct(ma);
           if(pos!=-1) {
               var anh=document.getElementById("hinh");
               anh.src=a[pos].path;

                var p1=document.getElementById("ma");
                p1.innerHTML="code:" + a[pos].code; // <p> de trong, nhet noi dung ben trong => inner
                var p2=document.getElementById("ten");
                p2.innerHTML=a[pos].name; 
                var p3=document.getElementById("gia");
                p3.innerHTML="price:$" + a[pos].price; 
                

               var thediv=document.getElementById("detail");
               thediv.style.display="block";
           }
        }
        function closedetail()
        {
            document.getElementById("detail").style.display="none";
        }
        function check(ma)
        {
            for(var i=0; i< window.localStorage.length; i++)
            {
                var ma_local=window.localStorage.key(i);
                if(ma_local==ma)
                return i;
            }
            return -1;
        }
        function addproduct()
        {
            var thep=document.getElementById("ma");
            var s=thep.innerHTML;
            s=s.split(":");
            var ma=s[1];
            var pos=check(ma);
            if(pos!=-1) // co ma trong local
            {
                  var value_cu=window.localStorage.getItem(ma);
                  value_cu++;
                  window.localStorage.setItem(ma,value_cu);
            }
            else // k co ma trong local
            {
                  window.localStorage.setItem(ma,1);
                  window.alert("added!!!");
            }
        }

        function xemgiohang()
        {
            var sum = 0;
            var s ="<table>";
            s=s+"<tr>";
            s=s+"<th>Product</th>";
            s=s+"<th>Option</th>";
            s=s+"<th>Price</th>";
            s=s+"</tr>";

            for(var i=0; i<window.localStorage.length;i++)
            {
                var ma=localStorage.key(i);
                if(ma!=null) {
                    var pos=findproduct(ma);
                    if(pos!=-1)
                    {
                        s=s+"<tr>";
                        s=s+"<td><img src='" + a[pos].path+"'>";
                        s=s+"<br><br>"+a[pos].name;
                        s=s+"<br>"+a[pos].code+"</td>";
                        s=s+"<td><input type='number' value='"+ window.localStorage.getItem(ma)+"' min='1' max='10'onchange='update(this.value,\""+a[pos].code+"\")'></td>";
                        s=s+"<td>"+ a[pos].price+"<br>";
                        s=s+"<a href='#' onclick='xoa(\""+a[pos].code+"\")'>remove</a></td>";
                        s=s+"</tr>";
                        sum= sum+localStorage.getItem(ma)*a[pos].price;
                    }
                }
            }
            s=s+"</table>";
            s=s+"<p>Tong tien thanh toan:"+ sum+"$</p>";
            var thediv = document.getElementById("giohang");
            thediv.innerHTML=s; // gán s vào ruột thẻ div (con của div)
        }
        function update(soluong, ma)
        {
            window.localStorage.setItem(ma,soluong);
            window.alert("updateed!!!");
            xemgiohang();
        }
        function xoa(ma) {
            var traloi=window.confirm("Are u sure?");
            if(traloi == true)
            {
              window.localStorage.removeItem(ma);
              xemgiohang();
            }
          }
          function checkout()
          {
              var t1=document.getElementById("t1");
              var t2=document.getElementById("t2");
              if(t1.value==""||t2.value=="") {
                  window.alert("K de trong ten va phone");
              }
              else 
              {
                  window.alert("Thank you ! We will call you asap");
                  window.localStorage.clear();
                  window.open("barfixed.html");
              }
          }