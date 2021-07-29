fetch('https://api.openweathermap.org/data/2.5/onecall?lat=50.43&lon=30.51&exclude=current&appid=ab21f393f45ca178ee876c04dd6dd0fd')
	.then(function (resp) { return resp.json() })
	.then(function (data) {
		document.querySelector('.city').textContent = data.timezone;
		arr = data.daily;
		console.log(data);

		arr.forEach((item) => {
			let inner = document.querySelector('.days');
			let maindiv = document.createElement("div");
			let ddate = document.createElement("div");
			let dtemp = document.createElement("div");
			let dimg = document.createElement("div");
			maindiv.className = "day";
			ddate.className = "date";
			dtemp.className = 'temp';
			dimg.className = 'img';
			let time = new Date(item.dt * 1000);
			let day = time.getDate();
			let month = time.getMonth() + 1;
			let outtime = `${day}.0${month}`;
			let temp = Math.round(item.temp.day - 273);
			ddate.innerHTML = outtime;
			dtemp.innerHTML = temp + '&deg;';
			dimg.innerHTML = `<img src="./assets/images/${item.weather[0].main}.jpg">`;
			inner.append(maindiv);
			let divdays = document.querySelector('.day');
			divdays.append(ddate);
			divdays.append(dimg);
			divdays.append(dtemp);

		})
	})
	.catch(function () {

	});