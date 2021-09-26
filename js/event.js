var logins = {
  test03: {
    register: {
      BBR: {
        username: 'ZARWYOJNOO',
        password: 'P1beS0vs..',
        host: 'test03-services.datafordeler.dk'
      },
      CVR: {
        username: 'ATPCBEXSNP',
        password: 'P1beS0vs..',
        host: 'test03-services.datafordeler.dk'
      },
      CPR: {
        username: '',
        password: 'Nuga10s..',
        host: 'test03-services.datafordeler.dk'
      },
      DAGI: {
        username: 'HGNBFKJEZE',
        password: 'P1beS0vs..',
        host: 'test03-services.datafordeler.dk'
      },
      DAR: {
        username: 'GICPTNKBFW',
        password: 'P1beS0vs..',
        host: 'test03-services.datafordeler.dk'
      },
      DS: {
        username: '',
        password: 'P1beS0vs..',
        host: 'test03-services.datafordeler.dk'
      },
      EBR: {
        username: 'KAWSVXFIJY',
        password: 'P1beS0vs..',
        host: 'test03-services.datafordeler.dk'
      },
      EJF: {
        username: 'BTRVGSFQVC',
        password: 'Nuga10s..',
        host: 'test03-services.datafordeler.dk'
      },
      GeoDK: {
        username: 'KMYFCRKNBK',
        password: 'P1beS0vs..',
        host: 'test03-services.datafordeler.dk'
      },
      MU: {
        username: 'FTXZUJOQVX',
        password: 'P1beS0vs..',
        host: 'test03-services.datafordeler.dk'
      },
      GeoDKVektor: {
        username: 'STLCLNICSE',
        password: 'Nuga10s..',
        host: 'test03-services.datafordeler.dk'
      }
    }
  },
  test06: {
    register: {
      BBR: {
        username: 'TENBZDPEQW',
        password: 'NuGa10s..',
        host: 'test06-s5-certservices.datafordeler.dk'
      },
      CVR: {
        username: 'NMDQQPBURD',
        password: 'NuGa10s..',
        host: 'test06-s5-certservices.datafordeler.dk'
      },
      CPR: {
        username: '',
        password: 'Nuga10s..',
        host: 'test06-services.datafordeler.dk'
      },
      DAGI: {
        username: 'GFTJXMXVNW',
        password: 'NuGa10s..',
        host: 'test06-services.datafordeler.dk'
      },
      DAR: {
        username: 'QZWJQBHALL',
        password: 'NuGa10s..',
        host: 'test06-services.datafordeler.dk'
      },
      DS: {
        username: '',
        password: 'P1beS0vs..',
        host: 'test06-services.datafordeler.dk'
      },
      EBR: {
        username: 'RRBAEUJDOE',
        password: 'NuGa10s..',
        host: 'test06-services.datafordeler.dk'
      },
      EJF: {
        username: 'BTRVGSFQVC',
        password: 'Nuga10s..',
        host: 'test06-services.datafordeler.dk'
      },
      GeoDK: {
        username: 'IUQMHYGIFZ',
        password: 'NuGa10s..',
        host: 'test06-services.datafordeler.dk'
      },
      MU: {
        username: 'NWSGFUGZDN',
        password: 'NuGa10s..',
        host: 'test06-services.datafordeler.dk'
      },
      EJF: {
        username: 'SPZIUXMYXM',
        password: 'NuGa10s..',
        host: 'test06-s5-certservices.datafordeler.dk'
      },
      VUR: {
        username: 'XDVRBSBFQW',
        password: 'NuGa10s..',
        host: 'test06-services.datafordeler.dk'
      },
      GeoDKVektor: {
        username: 'STLCLNICSE',
        password: 'Nuga10s..',
        host: 'test06-services.datafordeler.dk'
      }
    }
  },
  prod01: {
    register: {
      BBR: {
        username: 'AYFPOEOPPT',
        password: 'NuGa10s..',
        host: 'services.datafordeler.dk'
      },
      CVR: {
        username: 'OLLGJUZZNZ',
        password: 'Nuga10s..',
        host: 'services.datafordeler.dk'
      },
      CPR: {
        username: 'WUNZBATWIU',
        password: 'Nuga10s..',
        host: 'services.datafordeler.dk'
      },
      DAGI: {
        username: 'ONCVAXSNFU',
        password: 'Nuga10s..',
        host: 'services.datafordeler.dk'
      },
      DAR: {
        username: 'JREZZRLWHY',
        password: 'Nuga10s..',
        host: 'services.datafordeler.dk'
      },
      DS: {
        username: 'UIMNXRIGWG',
        password: 'Nuga10s..',
        host: 'services.datafordeler.dk'
      },
      EBR: {
        username: 'JNBIFOKCBI',
        password: 'Nuga10s..',
        host: 'services.datafordeler.dk'
      },
      EJF: {
        username: 'BTRVGSFQVC',
        password: 'Nuga10s..',
        host: 'services.datafordeler.dk'
      },
      GeoDK: {
        username: 'WXRZCAPLBQ',
        password: 'Nuga10s..',
        host: 'services.datafordeler.dk'
      },
      MU: {
        username: 'JDUNVQSAUB',
        password: 'Nuga10s..',
        host: 'services.datafordeler.dk'
      },
      DS: {
        username: 'UIMNXRIGWG',
        password: 'Nuga10s..',
        host: 'services.datafordeler.dk'
      },
      GeoDKVektor: {
        username: 'STLCLNICSE',
        password: 'Nuga10s..',
        host: 'services.datafordeler.dk'
      }
    }
  }
}
var username = '&username=GTCXKEQSHC'
var passwd = '&passwd=Ford2010'
var environment = 'prod01'
var thedate = moment().format('YYYY-MM-DD')
var onedayafter = moment()
  .add(1, 'day')
  .format('YYYY-MM-DD')
var pagesize = 100000
var pageno = 1
function seturl (environment, reg, fromdate, todate, page) {
  host = logins[environment].register[reg].host
  base = 'https://' + host + '/system/EventMessages/1.0.0/custom'
  from = '?datefrom=' + fromdate
  to = '&dateto=' + todate
  pageing = '&page=' + page
  ps = '&pagesize=' + pagesize
  format = '&format=json'
  uname = '&username=' + logins[environment].register[reg].username
  pwd = '&password=' + logins[environment].register[reg].password
  url = base + from + to + ps + pageing + format + uname + pwd
  return url
}

//console.log(thedate);
//console.log(onedayafter);
$(document).ready(function () {
  $('#dp').val(thedate)
  reg = $('#register').val()
  environment = $('#environment').val()
  pageno = 1
  newurl = seturl(environment, reg, thedate, onedayafter, pageno)
  //console.log(newurl);
  $.fn.dataTable.ext.errMode = ''
  var table = $('#eventtable')
    .DataTable({
      ajax: { url: newurl, dataSrc: '' },
      select: { style: 'os' },
      deferRender: true,
      pageLength: 10,
      buttons: ['copy', 'excel', 'pdf'],
      order: [[2, 'desc']],
      columns: [
        {
          data: 'Nr',
          render: function (data, type, full, meta) {
            //console.log(meta.row)
            return meta.row
          }
        },
        { data: 'Id' },
        { data: 'Timestamp' },
        {
          data:
            'Message.Grunddatabesked.Hændelsesbesked.Beskedkuvert.Filtreringsdata.beskedtype'
        },
        {
          data:
            'Message.Grunddatabesked.Hændelsesbesked.Beskedkuvert.Filtreringsdata.Objektregistrering.0.objekttype'
        },
        {
          data:
            'Message.Grunddatabesked.Hændelsesbesked.Beskedkuvert.Filtreringsdata.Objektregistrering.0.status'
        },
        {
          data:
            'Message.Grunddatabesked.Hændelsesbesked.Beskedkuvert.Filtreringsdata.Objektregistrering.0.objekthandling'
        },
        {
          data:
            'Message.Grunddatabesked.Hændelsesbesked.Beskedkuvert.Filtreringsdata.Objektregistrering.0.objektID'
        },
        {
          data:
            'Message.Grunddatabesked.Hændelsesbesked.Beskedkuvert.Filtreringsdata.Objektregistrering.0.registreringsaktør'
        },
        {
          data:
            'Message.Grunddatabesked.Hændelsesbesked.Beskedkuvert.Filtreringsdata.Objektregistrering.0.registreringstid'
        },
        { data: 'Message', visible: false }
      ]
    })
    .on('select', function (e, dt, type, indexes) {
      //console.log("select "+type+' '+indexes);
      if (type === 'row') {
        var message = table
          .rows(indexes)
          .data()
          .pluck('Message')[0]
        $('#nr').text('Nummer ' + indexes)
        $('#id').text(
          'Id ' +
            table
              .rows(indexes)
              .data()
              .pluck('Id')[0]
        )
        $('#message').text(JSON.stringify(message, undefined, 2))
      }
    })

  //
  // Keep track on number of events
  //

  table.on('draw', function () {
    console.log(
      'There are ' + table.data().length + ' row(s) of data in this table'
    )
    records = table.data().length
    console.log(records + ' records')
    console.log((records % pagesize) + 'pagebreak')
    if (records > 0 && records % pagesize == 0) {
      console.log('We need paging')
      theurl = table.ajax.url()
      console.log('Data source: ' + table.ajax.url())
      environment = $('#environment').val()
      reg = $('#register').val()
      pageno++
      newurl = seturl(environment, reg, today, tomorrow, pageno)
      console.log('Newurl : ' + newurl)
      $.getJSON(newurl, function (data) {
        table.rows.add(data).draw()
      })
    }
  })

  function updateTable () {
    thedate = $('input[name="datepicker"]').datepicker('getFormattedDate')
    today = moment(thedate).format('YYYY-MM-DD')
    tomorrow = moment(thedate)
      .add(1, 'day')
      .format('YYYY-MM-DD')
    //console.log('Change the date '+thedate);
    //console.log(today+' '+tomorrow);
    cleartable()
    reg = $('#register').val()
    environment = $('#environment').val()
    updateurl = seturl(environment, reg, today, tomorrow, 1)
    console.log('updateTable: ' + updateurl)
    table.ajax.url(updateurl).load()
  }

  // Datapicker
  $('input[name="datepicker"]')
    .datepicker({
      format: 'yyyy-mm-dd',
      language: 'da',
      endDate: thedate,
      todayHighlight: true,
      calendarWeeks: true,
      autoclose: true
    })
    .on('changeDate', function (ev) {
      updateTable()
    })
  function cleartable () {
    table.clear().draw()
  }
  $('#refresh').click(function () {
    //console.log("refresh activated");
    cleartable()
    table.ajax.reload(null, false) // user paging is not reset on reload	});
  })
  $('#clear').click(function () {
    //console.log("clear activated");
    cleartable()
  })
  $('#register').on('change', function () {
    $('#title').text(
      'Hændelseslog (' + $('#register').val() + ' - ' + environment + ' )'
    )
    updateTable()
  })
  $('#environment').on('change', function () {
    $('#title').text(
      'Hændelseslog (' + $('#register').val() + ' - ' + environment + ' )'
    )

    $('#register').selectpicker('deselectAll')
    env = $('#environment').val()
    $.each(logins[env].register, function (index, val) {
      console.log(index + ' ' + val.username)
      $('#register').selectpicker('val', index)
    })
    $('#register').selectpicker('refresh')
    updateTable()
  })
})
