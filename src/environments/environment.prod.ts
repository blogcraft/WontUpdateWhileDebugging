import { Cliente } from './Cliente';
import { Env } from './env';

export const environment: Env = {
  production: true,
  appUrl: 'http://200.111.98.44:8106/',
  shouldIGetTokenTime: 600,
  sessionTimeLeft: 60,
  habilitarNotificaciones: false,
  habilitarMensajes: true,
  habilitarFiltroNegocio: true,
  habilitarMonedaSalida: true,
  mostrarCodMoneda: 'code',
  mostrarDecimales: 'auto',
  mostrarPerfilRiesfo: true,
  habilitarCambioFecha: false,
  habilitarCircular57: true,
  habilitarCircular1962: true,
  habilitarDatosDemograficos: true,
  habilitarDeclaracionCrs: false,
  habilitarCartolaCuenta: false,
  habilitarCartolaCliente: false,
  habilitarCartolaClienteApv: false,
  habilitarCartolaGrupo: false,
  evolucionTipoCambioOnline: false,
  cliente: Cliente.Core,
};
