export default function Home() {
  return (
    <div className="flex flex-col items-center h-fit w-full">
      
      <div  className="w-full h-15 md:h-fit bg-[#171717] flex md:flex-row items-center justify-center rounded-b-xl p-2 fixed">
          <img src="https://themehealer.com/php-template/crank-php/assets/images/resources/logo-1.png"
          className="rounded-2xl md:ml-10"></img>

          <div className="hidden md:flex flex-row itmes-center justify-evenly w-5/10 h-full">
            <button className="text-1xl font-bold">Home</button>
            <button className="text-1xl font-bold">About us</button>
            <button className="text-1xl font-bold">Pages</button>
            <button className="text-1xl font-bold">Services</button>
            <button className="text-1xl font-bold">Shop</button>
            <button className="text-1xl font-bold">Blog</button>
            <button className="text-1xl font-bold">Contact</button>
          </div>

          <div className="hidden md:flex flex-row items-center justify-evenly h-full w-3/10">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPgAAADLCAMAAAB04a46AAAAflBMVEX///8AAAD6+vpXV1cbGxuGhobj4+OAgIBLS0v8/Pzq6ur4+Piurq719fWlpaXv7+/U1NSQkJC6urpSUlKcnJzBwcHe3t7Y2NgiIiJvb28xMTFpaWmKioopKSnIyMhfX18UFBR5eXk4ODgwMDBAQEBjY2NMTEyXl5cXFxeqqqrIvKtqAAAG0klEQVR4nO2da2OiOhCGBbUKKqh4V1Ssuu3//4PHenZP7VYgk5k3CT15vu6u8CyQy8wkabU8Ho/H4/F4PB6Px+PxeDyen0YURWEYRpHt+zBF9DKeznrrQ/+Ud4LjsZOfs8u6m8yXse07A7IcFv1VUEae7aY/z340nrRLlR/ZJouf8/anw21HyfpfNsXc9h1LkA4zgvQf1vOGP/f9WsP6zqq7sH3z2oySV13tO9epbQMtXnYs6zt5MrKtQSXu8bU/WM0a9bHHXRntO0loW0eVaCaofWPTkG99nst638ga0MLHW3HtDyauf+pDiPaN16VttSriA8r7xs7dhz4/Ar2DoP9iW7AEyT7sOU4276nOZISKg6/7kjLz1CdzbQw7NaJ9I3erS09Med8Y25Z9YGLQOwjcCdAIzcSUcaVxN+3tirl5bzfMBQItGtj/zn9Z8Q6CvWVv2GysFruztb017+CYWvRe2PO+TdbsxeIGG5viwdqa+EVSIz+3D9v19tDO+qfynOoXEkveYgP0Tm+4jB+mXeEojZfzZLc+1fxDO8P2sYz1OakKrIwqY5ergTHbT0KRKPK6rleqHhfa+MwlRqqX+ihazWXMj10FevBcZfRVI26+N1dseCu4KEWR6l4s0y87P6I6U7tQ7RdldtDOH7K9K16pVvxkNPCqVsIk4K3Qhiq+OiLMud4T5UspdB4G2zfuGL2tfikF8R5O9C+4k/AjoYJRZbhgKqcW8YqZgmBIuJiKeAFT/Qr3gZ8pF1MaIBp65NwsGannVRI388i5abIr6WpqUwIjDXufKU6bV6iJq3eP+rCn4bQ5tJq4iYm5dlnub4i9ruLsFz89HTG9qZMKRXFaw6HDO1ec+FKqxjvgPdqZ6V03Wh2NZ8Xheu3/5qoa4EI3by9M72BX+fPpTjfAsQGLs3OElWlOzpgQHGq+csWroqqssA72XY+53kHFxIxX7U2aAZBhZ4VX5Zk+bjgL2q6zs2Wn8t/m1nsrR7N04HpXvJDsr+gA9F6yxbPS3+bXVgDF+fnR8vELf2UDsDiEnxAvF69LCddDiWjRiPg3Vy7Oz0nhskn8XrxcPOSXffdh4gIZUqQ4LgAlUPsBFYeVshf8e4OKw8IwAqtOoOK/UOICq6ug4qjwesS/Naw4KvAm0JthxY8gcYnCNqg4arTOLgcI0OKgsl6JtWVYcdDOQRK1q1hx0AhGYgcErDgo0iqxrA4rDqp5k1gm3UhxibLd0tBTKPDjqEVZ1Ce+iJ5Q+uvP/nJE/M8GiVOX1kkEumnlF6BXndq4SYjT5kUgcWp3JiCe0q4I6s6oAxgBceL0ADSAoYb8BcSJo2TQkJU6SREQJzYroNon6rRUQJyYXuFf8CnUQISAOK3i5si/4FOooSe+eEobx8IyCsRgI1+cWGoEq+Ulhpf54sTUDSy8TJyl8MWJIwdYQoF4H3xx4rQIlkIivnl8ceK3BUsaEvszvjjterg0cUhbdsUWH9DEgctMaaUgbHHiUBFXCkJs3djixCkKsPiH9gjY4sSKYQnDMsyK06YoFwnBMkj7rrLFaVMUaEknKRbBDQsMaBVg0CJeUk9edL9TumdNuPv2dwuSd0V5sATc1Xa4hEL1mg823MQhLoUEXprBraaHiedYb/byK5g4fHUpc8EdTBy+4I65xBIljpuZ/UfhpLiBPZ94RV8g8Y6JTbhZXTlI3MTCeV7VF0jczAlxnFvEiBvaD4WzUAojbmg7lJCxAQ5E3NieboxHDhE3d4yI/j6VCHFTOx61OHXMCHGT2zZqb2QHEDe5kZ3+6lp58Y3Zvad199GXFze8w3z45oj41qT1B5rLLaXF38xvL184IW7h+IxQa92zsLiVveW1Juay4rmds7B0dgGSFbd1HpTGtg6i4tBsWRUj+phdUtze4REa6QVB8bPNo3vJvbmcOGU7XwDU/IKcuO2D7ohNu5i47UOgqHWeUuIuHHhWWBB3wZtmLiMOrGgjQTAXEXfFm7JmRkLc/rF+nyhXiAiI22/PH1FNqLHFX107i3ustmCFK9537VDmVitV2rKVKd41aaSMykIKnrg7zflXFBIsHPGTWydwP5LWFvkyxMGli0zqEqna4ivbs7E64urlG7riE6NnXOkxrwpI6Ylnds/jVSWsmKPriHdcGqNWk5b2bHTxt6QBb/knL4WQ+Mzm2ctaxN1ng1ia+GuznvYf0tn3Zo4ink0bqX1n/3eyRVn82HV3nKZEPGxriK/nNk4dliYeHkjixbxxDVop0X6SvVWL3/84vyTNGKtQSJfvvXOp+KDT3k0X7oUZ4DS3Afd4PB6Px+PxeDwej8fj8Xg8/2P+Ad0xcLAR4iwgAAAAAElFTkSuQmCC"
            className="w-1/10 rounded-full">
            </img>
            <img src="data:image/jpeg;base64,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"
            className="w-1/10 rounded-full">
            </img>
            <img src="data:image/png;base64,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"
            className="w-1/10 rounded-full">
            </img>
            <img src="data:image/png;base64,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"
            className="w-1/10 rounded-full">
            </img>

            <img 
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEUAAAD///+Ghobg4OB0dHTx8fHc3Nz5+fnQ0NDU1NQ7OzusrKyhoaGoqKienp7r6+uzs7PJycnCwsJeXl4ICAhFRUW7u7tWVlZPT0/l5eVtbW0dHR0pKSlcXFx+fn5nZ2czMzOUlJQkJCRCQkKVlZUQEBB5eXkWFhaMjIyuHPFvAAAHoUlEQVR4nOWd2YKiOhBAExUU2oVuUWm03Xr09v9/4YW2xQ2yVYUsnId5mAcnZ4BUUkkqhOpmGETLybS3y+LN+pQSQtLTehNnu950soyCofZ/n2j87VmY/Oxiwibe9d7CmcZW6DKMknyRcuTu+M6TSFNLdBiG45WE3I1sHGpoDbZhsByoyFUMkgC5RaiGn8kcpHfha/KJ2Sg8w2GyQtC7kCV4fSyW4Qj2cr6Sj5BahmIYjHkxQYX9FOWTRDAMtxr0Lmz7FhhGX9r8Sr7AAQRoGGVa/Uoy4AcJMowwggOfL9BwB2AYtuNXMge8q8qGwbk1v5KzcoBUNRy36lcybtVwpCP+8YjVuhwVwyH2+EWUc0uGH4b8Sj5aMDT2AC/k0iM5WcPRxqggIcd3vYYHw34lPxoNZya60FdiqcSVjOG7abUKmTdVwnBq2uuOqQ7DnWmrB+bohsHetNMTe9GwIWgYHk0bvXAUnG+IGdrTx9wj1t8IGSamXRpIsAzfTJs08oZj2P5UUByBSSPf8J9pCyYHuKHdggKKPEObX9ELvBeVY2hvJ3OD092wDW0NE4+wgwbT0M5A/woz9LMMQ9MtF4Y1gGMYBvaNRZs4MobhDMO96XZLsFcxbG9VAoOdvKFNM3oRGmf9TYaudKM3mjrUBsOZ6fYq0JCBazC0I20ox7eMoQ2JX3kO4oYj021VpHb5rc7QoVD/SG3grzM0u7oEYSBmaHJ9EErN+uKr4dB0K0GIGLr7jpZs+Yau9qNXXvrTF0MXY/09Mc/Q/swTj+fM1JNhYLp9CARMw3a3cunhzDJ0JzPDImQYujWvb2LebBiZbhsSo0ZDPx4hIasmQ18e4eNDvDfUv2e7LbJ6Q38e4UN3emcIO1aQLvIBHlJH+2qY1xmCYmGmsPGTwwfoo7kdRbkZQk6+iOwYkAeyeHmbRVWGkBEp/gO8AMk2VKPTyhAwqdDzBEsAT7GaYlSGe+Xfyupbh4L6t1itRl0NAVN7Xe9oCeA9vUb9q2Gu/EupRkFK1YNG/mgISLAttBou1Bs2fDAEbLrIm5uHgPq7dd2i8WcIiK7WGq7uDT/Vf8fet5R83hlCRg+29jTXOH0xBA26LY0W1+H3ryEsh2hnxC8JKkPg9rWJNsEJrGHLyhC6GGPjyLtkUBkCf0jXUwQ+QXJZayv/QMgDLzTMgL/hzQr/DHFWY1bbHh5bnDop4z9Df3Jsz6z+DE23Qx/pxdCnLOIz0a+hG5u51Uh+DQHDd+vJfw0hw3fbWZSGM1h22W5Os8LQj3XfJsLC0OeOpuxqCO2ZboRWeoWhXWe0sdkVhq5vgmITU+L2VkQ+Q+LDLigWAfF5VFoSkaXpJmhmSeCpAruZENfON8kyJUgBfzGN+phEU6QJQY+gBPy1bPEmEd7XGE3bEYwkzYrfXCUw0lEZQRjS6EvrI/z3xwShOhlq6eYHIKt+f2wI/GU/aBOk9AfcujU5gX9D3yPEeIgnAs5hbDQKUgr+iBByNOJVt1QAb1tGMKw7EYeHDaew9D5DcC3ttAPfof99KTweSlbblAIjHvo/pvF/XGrz3AKjbVkH5of+z/H9z9P4n2vzP1/qf87b/3UL/9ee/F8/9HwNOO/EOr7/ezH830/j/54o//e1eb03cdCR/aU+j0yjjuzz7sBeff/PW1h6ZgYhil3PzMA/RD01B/DOPXXg7BowV+PA+UP/z5D6fw64A2e5/T+PD9lB5kZNhQ7UxfC/tomH9Wmu+3y6U2OI7pV/ys6I/1InqgO1vjyr15a+1msDZfftq7nXq37lZgjanWNd3cTbLqa72pewRSi7al/eXR10Z+jTAkZ9/VKPcm4NNWg9Sg031RH2vxa0Nw+xuZ63Jw+RUZOd9k03DoU+wxBUTNgWni5ieTL0Yf/QkGmIkEk3zXN+unv3zHTgriDHOxuB+54cX/Su0Xn9K/cu6LxRc2agk3fndeD+Q2f7U+E7LDtwD6mbcV/qLlknt2TK3QfsYMiQvNPZvWsCpe/lhqZP20bhbnXIalT77Js1GIYOBf7aUM83dCgJHjIsWIbOdKjMM7pMQ0e2gCdMB7YhaAmvLTiLlxxDB8Li8+24sob0n2kDDgeeANfQckWuoICh1S8q7xUVM7S4uxHZISFiaG3QYIcJGUNLQ79YMQ4xQ9q3b4x6ZA3V5A1psDdt9MSeMdhWMrRtvtg8H1Q3pDZVQWmc0YMM6bs16SmZgj8yhnSGcEERAt8NWTUEQzuGcAe5Jksa0hFC9TMQx9rUPaIhHZpdmRqIBgl1Q7MDHIWaYgqG5hbCzyqNVTKkIxMrN7HsFwgxNLHvRvUcp6ohDc6t+m2H/CYhGxbzjfZ2Ms77/OZoMCw+R3ANXCFWEaSRIENKI/17wzO1DgbLkNJQ76xqLjjP1WhYfI/aammlW4TytgiGRb861hEf91PpEVodKIYFI+zhag78/CqwDIsheYJTj6RklSiHvxfwDAs+E4wQ+fWGWlwa1bAgWMJe10GC8vHdgW1YEo6/VDI6aTYGh4YadBiWREm++E9c7nuQgAYuDHQZlgT95U/OiyNx3ktCqdSSJDoNLwyDaDmZ9nZZvFmf0pSk6Wm9ibNdbzpZRgFen9nE/4dudttGOhxrAAAAAElFTkSuQmCC"
            className="rounded-full w-1/6">
            </img>
          </div>
      </div>

      <div className="flex flex-col items-center bg-black rounded-4xl h-fit w-full">
        <div className="flex flex-row w-full mt-30 ps-15">
          <div className="w:full md:w-1/2 flex flex-col justify-center md:p-5">
            <h1 className="text-6xl font-bold">Where Quality service meets</h1>
            <h1 className="text-6xl font-bold text-red-700">Open Roads</h1>
            <h3 className="mt-10 text-xl">Car service is essential for maintaining the performance and longevity of your vehicle.From oil changes Car service</h3>
            <button className="text-xl mt-10 border-red-600 border-1 w-fit p-5 rounded-full font-bold mb-15">GET STARTED</button>
          </div>
          <div className="w-1/2 p-10 h-full">
            <img
            src="https://themehealer.com/php-template/crank-php/assets/images/resources/main-slider-img-3.jpg"
            className="h-full rounded-4xl hidden md:block">
            </img>
          </div>
        </div>
      </div>

      <div className="w-fit md:w-320 h-fit bg-white rounded-2xl m-[-30px] flex md:flex-row flex-col items-center justify-center p-5 text-black">

          <div className="w-1/4 h-full flex flex-col items-center justify-center p-5">
            <h1 className="text-6xl font-bold">600+</h1>
            <h2 className="">Team Member</h2>
          </div>

          <div className="w-1/4 h-full flex flex-col items-center justify-center p-5">
            <h1 className="text-6xl font-bold">2k+</h1>
            <h2 className="">Service Complete</h2>
          </div>

          <div className="w-1/4 h-full flex flex-col items-center justify-center p-5">
            <h1 className="text-6xl font-bold">50+</h1>
            <h2 className="">Award Won</h2>
          </div>

          <div className="w-1/4 h-full flex flex-col items-center justify-center p-5">
            <h1 className="text-6xl font-bold">3k+</h1>
            <h2 className="">Client Review</h2>
          </div>

      </div>

      <div className="w-full h-fit bg-white mt-30 rounded-4xl flex flex-col items-center justify-center">

        <h1 className="text-xl text-red-600 mt-26">LATEST SERVICE</h1>
        <h1 className="md:text-5xl text-2xl text-black font-bold mt-5">Your Trusted Car Provider</h1>
        <h1 className="md:text-5xl text-2xl text-black font-bold mt-2">Keeping Your Vehicle</h1>

        <div className="w-18/20 h-4/10 mt-18 flex flex-col md:flex-row justify-between items-center md:items-start space-y-5 pb-20">
          <div className="p-8 text-center h-full md:w-30/100 border-2 border-black rounded-4xl transition-colors duration-300 hover:bg-black text-black hover:text-white flex flex-col items-center justify-center">
            <h1 className="font-bold text-3xl">Transformation Advising</h1>
            <h1 className="text-xl mt-5">Car service is essential for maintaining the performance and longevity of your vehicle. From oil changes Car service</h1>
          </div>

          <div className="p-8 text-center h-full md:w-30/100 border-2 border-black rounded-4xl transition-colors duration-300 hover:bg-black text-black hover:text-white flex flex-col items-center justify-center">
            <h1 className="font-bold text-3xl">Elite Auto</h1>
            <h1 className="font-bold text-3xl">Services</h1>
            <h1 className="text-xl mt-5">Car service is essential for maintaining the performance and longevity of your vehicle. From oil changes Car service</h1>
          </div>

          <div className="p-8 text-center h-full md:w-30/100 border-2 border-black rounded-4xl transition-colors duration-300 hover:bg-black text-black hover:text-white flex flex-col items-center justify-center">
            <h1 className="font-bold text-3xl">Easy Drive Maintainance</h1>
            <h1 className="text-xl mt-5">Car service is essential for maintaining the performance and longevity of your vehicle. From oil changes Car service</h1>
          </div>
        </div>
      </div>

      <div className="w-full h-fit md:p-20">
        <div className="w-full h-fit flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-[50%] h-full p-10 md:p-0">
            <h1 className="text-red-600 font-mono pt-20">ABOUT US</h1>
            <h1 className="text-black md:text-5xl text-3xl font-bold mt-3">Fast and Reliable Car Care</h1>
            <h1 className="text-black md:text-5xl text-3xl font-bold mt-2">Your Car Our Priority</h1>
            <h1 className="text-black text-xl mt-8">Car service is essential for maintaining the performance and longevity of your vehicle. From oil changes</h1>

            <ul className="text-black text-xl mt-10 list-disc list-inside font-bold space-y-5">
              <li>Fast and Reliable Car Care Your Car Our Priority</li>
              <li>Free with Our Services Care for Your Car</li>
              <li>Top-notch Care for Your Vehicle Your Vehicle</li>
              <li>Expert Service for Your Vehicle Drive Stress</li>
              <li>Your Trusted Car Service Provider Keeping</li>
            </ul>
          </div>
          <div className="w-[50%] h-full md:flex items-center justify-center hidden md:block">
            <img
            src="https://themehealer.com/php-template/crank-php/assets/images/resources/about-one-img-1.jpg"
            className="rounded-4xl hidden md:block">
            </img>
          </div>
        </div>
      </div>

      <div className="bg-[#171717] w-fit md:flex flex-row rounded-4xl hidden md:block" >
        <img src="https://themehealer.com/php-template/crank-php/assets/images/brand/brand-1-4.png" className="p-10"></img>
        <img src="https://themehealer.com/php-template/crank-php/assets/images/brand/brand-1-3.png" className="p-10"></img>
        <img src="https://themehealer.com/php-template/crank-php/assets/images/brand/brand-1-1.png" className="p-10"></img>
        <img src="https://themehealer.com/php-template/crank-php/assets/images/brand/brand-1-5.png" className="p-10"></img>
        <img src="https://themehealer.com/php-template/crank-php/assets/images/brand/brand-1-2.png" className="p-10"></img>
      </div>

      <div className="w-full h-fit p-22 hidden md:block">
        <div className="w-full h-fit flex flex-col">
          <h1 className="text-red-600 font-mono">LATEST GALLERY</h1>
          <div className="text-black flex flex-col md:flex-row justify-between items-center w-full h-[20%]">
            <h1 className="w-[40%] h-full font-bold text-4xl">Quality Service, Every Time Drive Safe Stay Secure</h1>
            <h1 className="w-[40%] h-full text-xl mt-12">Car service is essential for maintaining the performance and longevity of your vehicle. From oil changes</h1>
          </div>
          <div className="w-full h-[80%] flex flex-row items-center justify-evenly mt-5">

            <div className="h-full">
              <img src="https://themehealer.com/php-template/crank-php/assets/images/gallery/gallery-1-1.jpg"
              className="rounded-4xl mb-5"></img>
              <img src="https://themehealer.com/php-template/crank-php/assets/images/gallery/gallery-1-4.jpg"
              className="rounded-4xl mb-5"></img>
            </div>
            <div className="h-full">
              <img src="https://themehealer.com/php-template/crank-php/assets/images/gallery/gallery-1-2.jpg"
              className="rounded-4xl mb-5"></img>
              <img src="https://themehealer.com/php-template/crank-php/assets/images/gallery/gallery-1-5.jpg"
              className="rounded-4xl mb-5"></img>
            </div>
            <div className="h-full">
              <img src="https://themehealer.com/php-template/crank-php/assets/images/gallery/gallery-1-3.jpg"
              className="rounded-4xl mb-5"></img>
              <img src="https://themehealer.com/php-template/crank-php/assets/images/gallery/gallery-1-6.jpg"
              className="rounded-4xl mb-5"></img>
            </div>

          </div>
        </div>
      </div>

      <div className="w-full h-fit py-22 md:p-22 md:mt-[-120px]">
        <div className="w-full h-fit flex flex-col items-center text-black">
          <h1 className="text-red-600 font-mono">Pricing Plan</h1>
          <h1 className="font-bold text-2xl md:text-5xl mt-2">Our Pricing Plan</h1>

          <div className="flex flex-col md:flex-row w-full mt-10 justify-between px-2">
             <div className="md:w-[32%] flex flex-col bg-white md:rounded-4xl p-10">
              <h1 className="text-4xl font-bold">Free</h1>
              <p className="mt-2">Car service is essential for maintaining performance and longevity of vehicle. From oil changes</p>

              <div className="flex flex-row border-b-1 border-gray-300 py-5">
                <h1 className="text-4xl font-bold me-2">$0</h1>
                <h1 className="mt-3 text-xl">/month</h1>
              </div>

              <ul className="py-10 list-disc list-inside space-y-1.5 text-xl">
                <li>Mistakes To Avoid</li>
                <li>Winning for Your Startup</li>
                <li>Mistakes To Avoid</li>
                <li>Your Event, Your Memories</li>
              </ul>

              <button className="bg-[#EEEEEE] p-5 rounded-full font-bold hover:bg-black hover:text-white transition duration-300">GET STARTED NOW</button>
            </div>

            <div className="md:w-[32%] flex flex-col bg-white md:rounded-4xl p-10">
              <h1 className="text-4xl font-bold">Pro</h1>
              <p className="mt-2">Car service is essential for maintaining performance and longevity of vehicle. From oil changes</p>

              <div className="flex flex-row border-b-1 border-gray-300 py-5">
                <h1 className="text-4xl font-bold me-2">$50</h1>
                <h1 className="mt-3 text-xl">/month</h1>
              </div>

              <ul className="py-10 list-disc list-inside space-y-1.5 text-xl">
                <li>Mistakes To Avoid</li>
                <li>Winning for Your Startup</li>
                <li>Mistakes To Avoid</li>
                <li>Your Event, Your Memories</li>
              </ul>

              <button className="bg-[#EEEEEE] p-5 rounded-full font-bold hover:bg-black hover:text-white transition duration-300">GET STARTED NOW</button>
            </div>

            <div className="md:w-[32%] flex flex-col bg-white md:rounded-4xl p-10">
              <h1 className="text-4xl font-bold">Ultra</h1>
              <p className="mt-2">Car service is essential for maintaining performance and longevity of vehicle. From oil changes</p>

              <div className="flex flex-row border-b-1 border-gray-300 py-5">
                <h1 className="text-4xl font-bold me-2">$100</h1>
                <h1 className="mt-3 text-xl">/month</h1>
              </div>

              <ul className="py-10 list-disc list-inside space-y-1.5 text-xl">
                <li>Mistakes To Avoid</li>
                <li>Winning for Your Startup</li>
                <li>Mistakes To Avoid</li>
                <li>Your Event, Your Memories</li>
              </ul>

              <button className="bg-[#EEEEEE] p-5 rounded-full font-bold hover:bg-black hover:text-white transition duration-300">GET STARTED NOW</button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-fit md:p-10 bg-gradient-to-r from-red-700 via-black to-blue-800 rounded-t-4xl">
        <div className="w-full h-fit flex flex-col md:flex-row md:p-20 p-10 space-y-10 justify-between bg-black/50 rounded-4xl">

          <div className="flex-col">
            <img src="https://themehealer.com/php-template/crank-php/assets/images/resources/logo-1.png"></img>
            <div className="flex flex-col mt-10">
              <h1 className="text-xl">Address</h1>
              <h1 className="text-xl font-bold">66 Broklyant,New India</h1>
            </div>
            <div className="flex flex-col mt-5">
              <h1 className="text-xl">Phone Number</h1>
              <h1 className="text-xl font-bold">012 345 678 9101</h1>
            </div>
            <div className="flex flex-col mt-5">
              <h1 className="text-xl">Email</h1>
              <h1 className="text-xl font-bold">crank@mail.com</h1>
            </div>
          </div>

          <div className="flex-col">
            <h1 className="text-3xl font-bold">Pages</h1>
            <ul className="text-xl space-y-3 list-inside mt-5">
              <li>Home</li>
              <li>About</li>
              <li>Blog</li>
              <li>Pages</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="flex-col">
            <h1 className="text-3xl font-bold">Recent Posts</h1>

            <div className="flex flex-row mt-5">
              <img src="https://themehealer.com/php-template/crank-php/assets/images/blog/footer-widget-post-img-1.jpg"
              className="rounded-2xl"></img>
              <div className="flex flex-col p-5">
                <h1 className="text-l">Oct 32, 2068</h1>
                <h1 className="text-xl font-bold">Expert Guidance the Better Results</h1>
              </div>
            </div>

            <div className="flex flex-row mt-5">
              <img src="https://themehealer.com/php-template/crank-php/assets/images/blog/footer-widget-post-img-2.jpg"
              className="rounded-2xl"></img>
              <div className="flex flex-col p-5">
                <h1 className="text-l">Oct 96, 2099</h1>
                <h1 className="text-xl font-bold">Business Brilliance Starts Here</h1>
              </div>
            </div>
          </div>

          <div className="flex-col">
            <h1 className="text-3xl font-bold">Services</h1>
              <ul className="text-xl space-y-3 list-inside mt-5">
                <li>Customer Experience Evaluation</li>
                <li>Business Brilliance Starts Here</li>
                <li>Growth Catalyst Program</li>
                <li>Strategic Planning Workshops</li>
                <li>Digital Transformation Advising</li>
              </ul>
          </div>
        </div>  

        <div className="flex flex-row border-t-1 border-gray-600 mt-6 pt-6">
          <h1 className="p-5">Copyright ©2024 Crank. All rights reserved.</h1>
        </div>

      </div>

    </div>
  );
}
