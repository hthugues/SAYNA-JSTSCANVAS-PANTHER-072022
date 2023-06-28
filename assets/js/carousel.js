
let desc = 0,
nombre = 0;
            

$('#next').click(function () {
    $.ajax({
        url: './assets/json/descriptions.json',
        datatype: 'json',
        success: (descriptions) => {

            if(nombre < 7) {
                $('.img0').empty();
                $('.img0').attr("src", "./assets/1_Landing_page/Pantherhome_slider_" + (2 + nombre) + ".png");
                $('#titre0').empty();
                $('#titre0').text(descriptions[nombre+1].titre);
                $('#para0').empty();
                $('#para0').text(descriptions[nombre+1].paragraphe);
                $('.img1').empty();
                $('.img1').attr("src", "./assets/1_Landing_page/Pantherhome_slider_" + (3 + nombre) + ".png");
                $('#titre1').empty();
                $('#titre1').text(descriptions[nombre+2].titre);
                $('#para1').empty();
                $('#para1').text(descriptions[nombre+2].paragraphe);
                $('.img2').empty();
                $('.img2').attr("src", "./assets/1_Landing_page/Pantherhome_slider_" + (4 + nombre) + ".png");
                nombre++;
            }else {
                if (nombre == 7) {
                    $('.img0').empty();
                    $('.img0').attr("src", "./assets/1_Landing_page/Pantherhome_slider_" + (2 + nombre) + ".png");
                    $('#titre0').empty();
                    $('#titre0').text(descriptions[nombre+1].titre);
                    $('#para0').empty();
                    $('#para0').text(descriptions[nombre+1].paragraphe);
                    $('.img1').empty();
                    $('.img1').attr("src", "./assets/1_Landing_page/Pantherhome_slider_" + (3 + nombre) + ".png");
                    $('#titre1').empty();
                    $('#titre1').text(descriptions[nombre+2].titre);
                    $('#para1').empty();
                    $('#para1').text(descriptions[nombre+2].paragraphe);
                    $('.img2').empty();
                    $('.img2').attr("src", "./assets/1_Landing_page/Pantherhome_slider_1.png");
                    nombre++;
                }
                else  { 
                    if(nombre == 8) {
                    $('.img0').empty();
                    $('.img0').attr("src", "./assets/1_Landing_page/Pantherhome_slider_" + (2 + nombre) + ".png");
                    $('#titre').empty();
                    $('#titre0').text(descriptions[nombre+1].titre);
                    $('#para0').empty();
                    $('#para0').text(descriptions[nombre+1].paragraphe);
                    $('.img1').empty();
                    $('.img1').attr("src", "./assets/1_Landing_page/Pantherhome_slider_1.png");
                    $('#titre1').empty();
                    $('#titre1').text(descriptions[0].titre);
                    $('#para1').empty();
                    $('#para1').text(descriptions[0].paragraphe);
                    $('.img2').empty();
                    $('.img2').attr("src", "./assets/1_Landing_page/Pantherhome_slider_2.png");
                    nombre++;
                    }else {
                    $('.img0').empty();
                    $('.img0').attr("src", "./assets/1_Landing_page/Pantherhome_slider_1.png");
                    $('#titre0').empty();
                    $('#titre0').text(descriptions[0].titre);
                    $('#para0').empty();
                    $('#para0').text(descriptions[0].paragraphe);
                    $('.img1').empty();
                    $('.img1').attr("src", "./assets/1_Landing_page/Pantherhome_slider_2.png");
                    $('#titre1').empty();
                    $('#titre1').text(descriptions[1].titre);
                    $('#para1').empty();
                    $('#para1').text(descriptions[1].paragraphe);
                    $('.img2').empty();
                    $('.img2').attr("src", "./assets/1_Landing_page/Pantherhome_slider_3.png");
                    nombre = 0;
                    }
                }
                
            }   
        }
    });

    
});