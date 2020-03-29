                                                                                    var dataurl = "http://datacenter.taichung.gov.tw/swagger/OpenData/91deb8b8-7547-4a60-8cae-7c95c0df2fda"



var items = []

function downloadList1() {
    $('ul#location').html("")
    $.ajax({
        url: dataurl,
        success: function(res) {
            for (i = 0; res.length > i; i++) {
                console.log(res)
                items = res
                var area = items[i].CArea

                if (area == "西屯區") {

                    item = ` 

                  <li>
                    <i class="fa fa-compass"></i>
                    <h3>${items[i].Position}</h3>
                    <h4>(${items[i].EName})</h4>
                    <img src="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2015/05/28/1/846399.jpg&x=0&y=0&sw=0&sh=0&sl=W&fw=930&exp=3600&w=930" alt="" />
                    <wrap>
                       <h5>地址:${items[i].CAddress}</h5>
                       <h4>經緯度:X(${items[i].X})Y(${items[i].Y})</h4>
                       <h4>更新日期:${items[i].UpdateTime}</h4>
                    </wrap>
                  </li>

				`

                    $('ul#location').append(item)
                }

            }

        }
    })
}
function downloadList2() {
    $('ul#location').html("")
    $.ajax({
        url: dataurl,
        success: function(res) {
            for (i = 0; res.length > i; i++) {
                console.log(res)
                items = res
                var area = items[i].CArea

                if (area == "北屯區") {

                    item = ` 

                  <li>
                    <i class="fa fa-compass"></i>
                    <h3>${items[i].Position}</h3>
                    <h4>(${items[i].EName})</h4>
                    <img src="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2015/05/28/1/846399.jpg&x=0&y=0&sw=0&sh=0&sl=W&fw=930&exp=3600&w=930" alt="" />
                    <wrap>
                       <h5>地址:${items[i].CAddress}</h5>
                       <h4>經緯度:X(${items[i].X})Y(${items[i].Y})</h4>
                       <h4>更新日期:${items[i].UpdateTime}</h4>
                    </wrap>
                  </li>

				`

                    $('ul#location').append(item)
                }

            }

        }
    })
}

function downloadList3() {
    $('ul#location').html("")
    $.ajax({
        url: dataurl,
        success: function(res) {
            for (i = 0; res.length > i; i++) {
                console.log(res)
                items = res
                var area = items[i].CArea

                if (area == "東區") {

                    item = ` 

                  <li>
                    <i class="fa fa-compass"></i>
                    <h3>${items[i].Position}</h3>
                    <h4>(${items[i].EName})</h4>
                    <img src="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2015/05/28/1/846399.jpg&x=0&y=0&sw=0&sh=0&sl=W&fw=930&exp=3600&w=930" alt="" />
                    <wrap>
                       <h5>地址:${items[i].CAddress}</h5>
                       <h4>經緯度:X(${items[i].X})Y(${items[i].Y})</h4>
                       <h4>更新日期:${items[i].UpdateTime}</h4>
                    </wrap>
                  </li>

				`

                    $('ul#location').append(item)
                }

            }

        }
    })
}

function downloadList4() {
    $('ul#location').html("")
    $.ajax({
        url: dataurl,
        success: function(res) {
            for (i = 0; res.length > i; i++) {
                console.log(res)
                items = res
                var area = items[i].CArea

                if (area == "北區") {

                    item = ` 

                  <li>
                    <i class="fa fa-compass"></i>
                    <h3>${items[i].Position}</h3>
                    <h4>(${items[i].EName})</h4>
                    <img src="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2015/05/28/1/846399.jpg&x=0&y=0&sw=0&sh=0&sl=W&fw=930&exp=3600&w=930" alt="" />
                    <wrap>
                       <h5>地址:${items[i].CAddress}</h5>
                       <h4>經緯度:X(${items[i].X})Y(${items[i].Y})</h4>
                       <h4>更新日期:${items[i].UpdateTime}</h4>
                    </wrap>
                  </li>

				`

                    $('ul#location').append(item)
                }

            }

        }
    })
}

