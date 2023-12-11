import { Cliente } from './Cliente';
import { Env } from './env';

export const environment: Env = {
  production: false,
  appUrl: 'https://localhost:44302/',
  shouldIGetTokenTime: 600,
  sessionTimeLeft: 60,
  habilitarNotificaciones: false,
  habilitarMensajes: true,
  habilitarFiltroNegocio: true,
  habilitarMonedaSalida: true,
  mostrarCodMoneda: 'code',
  mostrarDecimales: 'auto',
  mostrarPerfilRiesfo: true,
  habilitarCambioFecha: true,
  habilitarCircular57: true,
  habilitarCircular1962: true,
  habilitarDatosDemograficos: true,
  habilitarDeclaracionCrs: true,
  habilitarCartolaCuenta: true,
  habilitarCartolaCliente: true,
  habilitarCartolaClienteApv: true,
  habilitarCartolaGrupo: true,
  evolucionTipoCambioOnline: false,
  cliente: Cliente.Core,
};
