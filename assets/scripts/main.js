jQuery(function () {
  structure.init();
});

var structure = {
  init: function () { }
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
          ');
        }
      }
    });
    $('.grp-cards .card:first').addClass('select');

    $('.card').click(function(){
      $(this).parent().find('.select').removeClass('select');
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