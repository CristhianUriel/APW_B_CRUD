<?php
    class Conectar{
        protected $dbh;

        protected function Conexion(){
            try{
                $conectar = $this->dbh = new PDO("mysql:local=localhost;dbname=apw_b_crud","root","");
                return $conectar;
            } catch(Exception $e){
                print "Error en la conexion de la DB:". $e->getMessage()."</br>";
            }
        }

        public function set_name(){
            return $this->dbh->query("SET NAMES 'utf8'");
        }
    }


?>
