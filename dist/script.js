async function fetchdata() {
    try {
        let response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2CBinanceCoin%2Cpolydon%2Cpepe%2Ctether%2Csolana%2Cdogecoin%2Ccardano%2Ctron&vs_currencies=usd&include_market_cap=true&include_24hr_change=true');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        let data = await response.json();

        // Header Data

        // Bitcoin price for header
        document.getElementById('bitcoinPriceTop').innerText = `$${data.bitcoin.usd.toFixed(2)}`;
        document.getElementById('ethereumPriceTop').innerText = `$${data.bitcoin.usd.toFixed(2)}`;
        document.getElementById('tetherPriceTop').innerText = `$${data.bitcoin.usd.toFixed(2)}`;
        document.getElementById('bnbPriceTop').innerText = `$${data.bitcoin.usd.toFixed(2)}`;

        // 24 houe change for header
        // 1st
        let bitcoinChangeTop = document.getElementById('bitcoinChangeTop');
        bitcoinChangeTop.innerText = `${data.bitcoin.usd_24h_change.toFixed(2)}%`;
        let bitcoin24hrChangeTop = `${data.bitcoin.usd_24h_change}`

        if (bitcoin24hrChangeTop < 0) {
            bitcoinChangeTop.style.color = 'red';
        } else {
            bitcoinChangeTop.style.color = 'green';
        }

        // 2nd
        let ethereumChangeTop = document.getElementById('ethereumChangeTop');
        ethereumChangeTop.innerText = `${data.ethereum.usd_24h_change.toFixed(2)}%`;
        let ethcoin24hrChangeTop = `${data.ethereum.usd_24h_change}`

        if (ethcoin24hrChangeTop < 0) {
            ethereumChangeTop.style.color = 'red';
        } else {
            ethereumChangeTop.style.color = 'green';
        }

        // 3rd
        let tetherChangeTop = document.getElementById('tetherChangeTop');
        tetherChangeTop.innerText = `${data.tether.usd_24h_change.toFixed(2)}%`;
        let tethcoin24hrChangeTop = `${data.tether.usd_24h_change}`

        if (tethcoin24hrChangeTop < 0) {
            tetherChangeTop.style.color = 'red';
        } else {
            tetherChangeTop.style.color = 'green';
        }

        // 4th
        let bnbChangeTop = document.getElementById('bnbChangeTop');
        bnbChangeTop.innerText = `${data.binancecoin.usd_24h_change.toFixed(2)}%`;
        let bnbcoin24hrChangeTop = `${data.binancecoin.usd_24h_change}`

        if (bnbcoin24hrChangeTop < 0) {
            bnbChangeTop.style.color = 'red';
        } else {
            bnbChangeTop.style.color = 'green';
        }

        // Table data

        //Image change for table
        // 1st
        let firstlogo = document.getElementById('firstlogo')
        document.getElementById('hello').addEventListener('click', () => {
            firstlogo.src = './src/images/bitcoin.webp';
        })

        document.getElementById('hello2').addEventListener('click', () => {
            firstlogo.src = './src/images/dogecoin.webp';
        })

        // 2nd
        let secondlogo = document.getElementById('secondlogo')
        document.getElementById('hello').addEventListener('click', () => {
            secondlogo.src = './src/images/ethereum.webp';
        })

        document.getElementById('hello2').addEventListener('click', () => {
            secondlogo.src = './src/images/cardano.webp';
        })

        // 3rd
        let thirdlogo = document.getElementById('thirdlogo')
        document.getElementById('hello').addEventListener('click', () => {
            thirdlogo.src = './src/images/Tether.webp';
        })

        document.getElementById('hello2').addEventListener('click', () => {
            thirdlogo.src = './src/images/solana.webp';
        })

        // 4th
        let fourthlogo = document.getElementById('fourthlogo')
        document.getElementById('hello').addEventListener('click', () => {
            fourthlogo.src = './src/images/bnb-icon2_2x.webp';
        })

        document.getElementById('hello2').addEventListener('click', () => {
            fourthlogo.src = './src/images/tron-logo.webp';
        })

        // Name change for table
        // 1st
        let firstname = document.getElementById('firstname')
        document.getElementById('hello').addEventListener('click', () => {
            firstname.innerText = 'BitCoin';
        })

        document.getElementById('hello2').addEventListener('click', () => {
            firstname.innerText = 'DogeCoin';
        })

        // 2nd
        let secondname = document.getElementById('secondname')
        document.getElementById('hello').addEventListener('click', () => {
            secondname.innerText = 'Ethereum';
        })

        document.getElementById('hello2').addEventListener('click', () => {
            secondname.innerText = 'Cardano';
        })

        // 3rd
        let thirdname = document.getElementById('thirdname')
        document.getElementById('hello').addEventListener('click', () => {
            thirdname.innerText = 'Tether';
        })

        document.getElementById('hello2').addEventListener('click', () => {
            thirdname.innerText = 'Solana';
        })

        // 4th
        let fourthname = document.getElementById('fourthname')
        document.getElementById('hello').addEventListener('click', () => {
            fourthname.innerText = 'BNB';
        })

        document.getElementById('hello2').addEventListener('click', () => {
            fourthname.innerText = 'Tron';
        })

        // Bitcoin price for table
        // 1st box
        let bitcoinPrice = document.getElementById('bitcoinPrice');
        document.getElementById('bitcoinPrice').innerText = `$${data.bitcoin.usd.toFixed(2)}`;

        document.getElementById('hello').addEventListener('click', () => {
            bitcoinPrice.innerText = `$${data.bitcoin.usd.toFixed(2)}`;
        })

        document.getElementById('hello2').addEventListener('click', () => {
            bitcoinPrice.innerText = `$${data.dogecoin.usd.toFixed(2)}`;
        })

        // 2nd box
        let ethereumPrice = document.getElementById('ethereumPrice');
        document.getElementById('ethereumPrice').innerText = `$${data.ethereum.usd.toFixed(2)}`;

        document.getElementById('hello').addEventListener('click', () => {
            ethereumPrice.innerText = `$${data.ethereum.usd.toFixed(2)}`;
        })

        document.getElementById('hello2').addEventListener('click', () => {
            ethereumPrice.innerText = `$${data.cardano.usd.toFixed(2)}`;
        })


        // 3rd box
        let tetherPrice = document.getElementById('tetherPrice');
        document.getElementById('tetherPrice').innerText = `$${data.tether.usd.toFixed(2)}`;

        document.getElementById('hello').addEventListener('click', () => {
            tetherPrice.innerText = `$${data.tether.usd.toFixed(2)}`;
        })

        document.getElementById('hello2').addEventListener('click', () => {
            tetherPrice.innerText = `$${data.solana.usd.toFixed(2)}`;
        })

        // 4th box
        let bnbPrice = document.getElementById('bnbPrice');
        document.getElementById('bnbPrice').innerText = `$${data.binancecoin.usd.toFixed(2)}`;

        document.getElementById('hello').addEventListener('click', () => {
            bnbPrice.innerText = `$${data.binancecoin.usd.toFixed(2)}`;
        })

        document.getElementById('hello2').addEventListener('click', () => {
            bnbPrice.innerText = `$${data.tron.usd.toFixed(2)}`;
        })

        // 24 hour change for table
        // 1st box change
        let bitcoinChange = document.getElementById('bitcoinChange');
        let bitcoin24hrChange = `${data.bitcoin.usd_24h_change}`

        //Color changer
        function bitcolorchanger() {
            if (bitcoin24hrChange < 0) {
                bitcoinChange.style.color = 'red';
            } else {
                bitcoinChange.style.color = 'green';
            }
        }

        bitcolorchanger()
        document.getElementById('bitcoinChange').innerText = `${data.bitcoin.usd_24h_change.toFixed(2)}%`;

        document.getElementById('hello').addEventListener('click', () => {
            bitcoinChange.innerText = `${data.bitcoin.usd_24h_change.toFixed(2)}%`;
            bitcolorchanger()
        })

        document.getElementById('hello2').addEventListener('click', () => {
            bitcoinChange.innerText = `${data.dogecoin.usd_24h_change.toFixed(2)}%`;
            bitcolorchanger()
        })


        // 2nd box change
        let ethereumChange = document.getElementById('ethereumChange');
        let ethereum24hrChange = `${data.ethereum.usd_24h_change}`
        function ethcolorchanger() {
            if (ethereum24hrChange < 0) {
                ethereumChange.style.color = 'red';
            } else {
                ethereumChange.style.color = 'green';
            }
        }
        ethcolorchanger()
        document.getElementById('ethereumChange').innerText = `${data.ethereum.usd_24h_change.toFixed(2)}%`;

        document.getElementById('hello').addEventListener('click', () => {
            ethereumChange.innerText = `${data.ethereum.usd_24h_change.toFixed(2)}%`;
            ethcolorchanger()
        })

        document.getElementById('hello2').addEventListener('click', () => {
            ethereumChange.innerText = `${data.cardano.usd_24h_change.toFixed(2)}%`;
            ethcolorchanger()
        })

        // 3rd box change
        let tetherChange = document.getElementById('tetherChange');
        let tether24hrChange = `${data.tether.usd_24h_change}`
        function tethcolorchanger() {
            if (tether24hrChange < 0) {
                tetherChange.style.color = 'red';
            } else {
                tetherChange.style.color = 'green';
            }
        }
        tethcolorchanger()
        document.getElementById('tetherChange').innerText = `${data.tether.usd_24h_change.toFixed(2)}%`;

        document.getElementById('hello').addEventListener('click', () => {
            tetherChange.innerText = `${data.tether.usd_24h_change.toFixed(2)}%`;
            tethcolorchanger()
        })

        document.getElementById('hello2').addEventListener('click', () => {
            tetherChange.innerText = `${data.solana.usd_24h_change.toFixed(2)}%`;
            tethcolorchanger()
        })


        // 4th box change
        let bnbChange = document.getElementById('bnbChange');
        let bnb24hrChange = `${data.binancecoin.usd_24h_change}`
        function bnbcolorchanger() {
            if (bnb24hrChange < 0) {
                bnbChange.style.color = 'red';
            } else {
                bnbChange.style.color = 'green';
            }
        }
        bnbcolorchanger()
        document.getElementById('bnbChange').innerText = `${data.binancecoin.usd_24h_change.toFixed(2)}%`;

        document.getElementById('hello').addEventListener('click', () => {
            bnbChange.innerText = `${data.binancecoin.usd_24h_change.toFixed(2)}%`;
            bnbcolorchanger()
        })

        document.getElementById('hello2').addEventListener('click', () => {
            bnbChange.innerText = `${data.tron.usd_24h_change.toFixed(2)}%`;
            bnbcolorchanger()
        })

        // Market cap for table
        // 1st box
        let bitcoinCap = document.getElementById('bitcoinCap');
        document.getElementById('bitcoinCap').innerText = `$${Math.floor(data.bitcoin.usd_market_cap).toLocaleString()}`;

        document.getElementById('hello').addEventListener('click', () => {
            bitcoinCap.innerText = `$${Math.floor(data.bitcoin.usd_market_cap).toLocaleString()}`;
        })

        document.getElementById('hello2').addEventListener('click', () => {
            bitcoinCap.innerText = `$${Math.floor(data.dogecoin.usd_market_cap).toLocaleString()}`;
        })

        // 2nd box
        let ethereumCap = document.getElementById('ethereumCap');
        document.getElementById('ethereumCap').innerText = `$${Math.floor(data.ethereum.usd_market_cap).toLocaleString()}`;

        document.getElementById('hello').addEventListener('click', () => {
            ethereumCap.innerText = `$${Math.floor(data.ethereum.usd_market_cap).toLocaleString()}`;
        })

        document.getElementById('hello2').addEventListener('click', () => {
            ethereumCap.innerText = `$${Math.floor(data.cardano.usd_market_cap).toLocaleString()}`;
        })


        // 3rd box
        let tetherCap = document.getElementById('tetherCap');
        document.getElementById('tetherCap').innerText = `$${Math.floor(data.tether.usd_market_cap).toLocaleString()}`;

        document.getElementById('hello').addEventListener('click', () => {
            tetherCap.innerText = `$${Math.floor(data.tether.usd_market_cap).toLocaleString()}`;
        })

        document.getElementById('hello2').addEventListener('click', () => {
            tetherCap.innerText = `$${Math.floor(data.solana.usd_market_cap).toLocaleString()}`;
        })

        // 4th box
        let bnbCap = document.getElementById('bnbCap');
        document.getElementById('bnbCap').innerText = `$${Math.floor(data.binancecoin.usd_market_cap).toLocaleString()}`;

        document.getElementById('hello').addEventListener('click', () => {
            bnbCap.innerText = `$${Math.floor(data.binancecoin.usd_market_cap).toLocaleString()}`;
        })

        document.getElementById('hello2').addEventListener('click', () => {
            bnbCap.innerText = `$${Math.floor(data.tron.usd_market_cap).toLocaleString()}`;
        })


    } catch (error) {
        console.error(error);
    }
}

fetchdata()


window.addEventListener('scroll', () => {
    var navbar = document.getElementById('navbar');
    if (window.pageYOffset > 0) {
        navbar.classList.add('navbarbar-customColor');
    } else {
        navbar.classList.remove('navbarbar-customColor');
    }
});


document.getElementById('mobileMenuButton').addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.toggle('-translate-x-full');
});

let menu = document.querySelectorAll('#mobileMenu a')

menu.forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('mobileMenu').classList.add('-translate-x-full')
    })
})