
var signo = prompt('cual es tu signo?').toLowerCase()
var respuesta;

signo = signo.replace('á', 'a')
signo = signo.replace('é', 'e')
signo = signo.replace('í', 'i')
signo = signo.replace('ó', 'o')
signo = signo.replace('ú', 'u')

switch (signo) {
	case'aries':
		respuesta = "Haga lo posible para desprenderse de aquello que le hace mal a su vida. Elija nuevos rumbos y vivirá una etapa de renovación interna muy enriquecedora."
		break;
	case'tauro':
		respuesta = 'Lo más recomendable para esta jornada cuando intente comunicarse con alguien, será que busque un diálogo conciliador sin confrontar a la gente que lo rodea.'
		break;
	case'geminis':
		respuesta = 'Relájese, ya que será una jornada donde su espontaneidad será bien recibida. No deje pasar el tiempo y exprese sus emociones en el momento oportuno.'
		break;
	case'cancer':
		respuesta = 'Intente pensar en usted. Destínese tiempo para poder terminar esa carrera que hace tiempo comenzó y por diversas situaciones no pudo finalizar.'
		break;
	case'leo':
		respuesta = 'Intente pensar en usted. Destínese tiempo para poder terminar esa carrera que hace tiempo comenzó y por diversas situaciones no pudo finalizar.'
		break;
	case'virgo':
		respuesta = 'Sería bueno que aprenda y cambie la manera en que enfrenta la vida a diario. Comience a disfrutar de lo que tiene y no se haga tanto problema.'
		break;
	default:
		respuesta = 'Agregue un signo sodiacal válido'
}
console.log(`${respuesta}`);
