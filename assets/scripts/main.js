var structure = {
  init: function () {
    this.btn();
    this.scrollTo();
  },

  btn: function () {
    $('#nav-toggle').click(function () {
      $(this).toggleClass('active');
    })
  },

  scrollTo: function () {
    $('.scrollTo').click(function () {
      $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
      }, 500);
      return false;
    });
  },

};

var home = {
  init: function () {
    this.profissionais();
  },

  profissionais: function () {
    $.ajax({
      type: 'GET',
      url: '/scripts/dados.json',
      dataType: 'json',
      async: false,
      success: function (profissinal) {
        console.log(profissinal)
        array = profissinal.length;
        for (i = 0; i <= array; i++) {
          $(".grp-cards").append('\
          <a href="#destaque" class="scrollTo">\
              <div class="card">\
                  <div class= "card-avatar" >\
                  <div class="avatar">\
                  <img src="'+ profissinal[i].foto + '" alt="Avatar usuário">\
                    <div class="num">\
                     '+ profissinal[i].id + '\
                    </div>\
                  </div>\
                  <div class="card-info">\
                    <p class="nome">'+ profissinal[i].nome + '</p>\
                    <p class="cargo">' + profissinal[i].cargo + '</p>\
                    <p class="idade" style="display: none">' + profissinal[i].idade + '</p>\
                  </div>\
              </div >\
            </div >\
            </a>\
          ');
        }
      }
    });
    $('.grp-cards .a:first').addClass('select');

    $('.card').click(function () {
      $(this).parent().parent().find('.select').removeClass('select');
      $(this).addClass('select')
      var nome = $(this).find('.card-avatar').find('.card-info').find('.nome').text();
      var cargo = $(this).find('.card-avatar').find('.card-info').find('.cargo').text();
      var idade = $(this).find('.card-avatar').find('.card-info').find('.idade').text();
      var foto = $(this).find('.card-avatar').find('.avatar').find('img').attr('src');
      $('#txtnome').html(nome)
      $('#txtcargo').html(cargo)
      $('#txtidade').html(idade)
      $('#imagem').attr('src', foto)
    })
  },

}