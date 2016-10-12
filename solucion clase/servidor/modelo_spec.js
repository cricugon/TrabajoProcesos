describe("El juego niveles tiene", function(){
	var juego;
	var modelo=require('./modelo.js');
	
	beforeEach(function(){
		juego=new modelo.Juego();
	});

	it("una coleccion de niveles y usarios", function(){
			expect(juego.niveles.length).toEqual(0);
			expect(juego.usuarios.length).toEqual(0);
	});

	it("agregar usuario", function(){
			var usuario=new modelo.Usuario("juan");
			juego.agregarUsuario(usuario);
			expect(juego.usuarios.length).toEqual(1);
			
	});

	it("agregar nivel ", function(){
			var nivel=new modelo.Nivel(1);
			juego.agregarNivel(nivel);
			expect(juego.niveles.length).toEqual(1);
			
	});

	

})