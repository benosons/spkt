<?php namespace App\Controllers;
use CodeIgniter\HTTP\RequestInterface;
use CodeIgniter\HTTP\Files\UploadedFile;
use App\Controller\BaseController;
use App\Libraries\Ciqrcode;

use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Reader\Xlsx;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx as Wxlsx;
use PhpOffice\PhpSpreadsheet\IOFactory;

class Jsondata extends \CodeIgniter\Controller
{
	protected $session;
	protected $request;

  function __construct(RequestInterface $request)
  {
      	$this->session = session();
		$this->now = date('Y-m-d H:i:s');
		$this->request = $request;
		$this->qrcode = new Ciqrcode();
		
      	$this->logged = $this->session->get('logged_in');
		$this->data = array(
			'version' => \CodeIgniter\CodeIgniter::CI_VERSION,
			'baseURL' => BASE.'/public',
			// 'baseURL' => BASE,
			'userid' => $this->session->get('user_id'),
			'username' => $this->session->get('user_name'),
			'role' => $this->session->get('user_role'),
		);

	}

		public function submitsurvey(){
			try
			{
			$request  = $this->request;
			$table 	  = $request->getVar('table');

			$model 	  = new \App\Models\DataModel();
	
			$data = [];
			$data['nomor']			= $request->getVar('nomor');
			$data['jenis_kelamin']	= $request->getVar('jenis_kelamin');
			$data['pendidikan']		= $request->getVar('pendidikan');
			$data['pekerjaan']		= $request->getVar('pekerjaan');
			// $data['kesesuaian']		= $request->getVar('kesesuaian');
			// $data['kemudahan']		= $request->getVar('kemudahan');
			// $data['kecepatan']		= $request->getVar('kecepatan');
			// $data['pelayanan']		= $request->getVar('pelayanan');
			// $data['kompetensi']		= $request->getVar('kompetensi');
			// $data['perilaku']		= $request->getVar('perilaku');
			// $data['penanganan']		= $request->getVar('penanganan');
			// $data['sarana']			= $request->getVar('sarana');
			$data['saran_kritik']	= $request->getVar('saran_kritik');
			$data['emot']			= $request->getVar('emot');
				
			$data['create_date'] 	= $this->now;
			$data['update_date'] 	= $this->now;
			$res = $model->saveData($table, $data);
			$id  = $model->insertID();
	
			$response = [
					'status'   => 'sukses',
					'code'     => '0',
					'data' 	   => 'terkirim'
			];
			header('Content-Type: application/json');
			echo json_encode($response);
			exit;
			}
			catch (\Exception $e)
			{
				die($e->getMessage());
			}
	
		}

		public function submittamu(){
			try
			{
			$request  = $this->request;
			$table 	  = $request->getVar('table');
			
			foreach ($_FILES as $key => $img) {
				$path = $img["tmp_name"];
				$type = $img['type'];
				$data = file_get_contents($path);
				$base64[$key] = 'data:image/' . $type . ';base64,' . base64_encode($data);
			}			

			$model 	  = new \App\Models\DataModel();
	
			$data = [];
			$data['nama']			= $request->getVar('nama');
			$data['telp']			= $request->getVar('telp');
			$data['jenis_kelamin']	= $request->getVar('jenis_kelamin');
			$data['ektp']			= $base64['ektp'];
			$data['selfie']			= $base64['selfie'];
			$data['tujuan']			= $request->getVar('tujuan');
				
			$data['create_date'] 	= $this->now;
			$data['update_date'] 	= $this->now;
			$res = $model->saveData($table, $data);
			$id  = $model->insertID();
	
			$response = [
					'status'   => 'sukses',
					'code'     => '0',
					'data' 	   => 'terkirim'
			];
			header('Content-Type: application/json');
			echo json_encode($response);
			exit;
			}
			catch (\Exception $e)
			{
				die($e->getMessage());
			}
	
		}

		public function simpanpetugas(){
			try
			{
			$request  = $this->request;
			$table 	  = 'data_petugas';

			$model 	  = new \App\Models\DataModel();
	
			$data = [];
			$data['nama']			= $request->getVar('nama');
			$data['nrp']			= $request->getVar('nrp');
			$data['whatsapp']		= $request->getVar('whatsapp');
			$data['alamat']			= $request->getVar('alamat_1').' '.$request->getVar('alamat_2').' '.$request->getVar('alamat_3');
				
			$data['create_date'] 	= $this->now;
			$data['update_date'] 	= $this->now;
			$data['create_by'] 		= $this->data['userid'];
			$data['update_by'] 		= $this->data['userid'];
			
			$res = $model->saveData($table, $data);
			$id  = $model->insertID();
	
			$response = [
					'status'   => 'sukses',
					'code'     => '0',
					'data' 	   => 'terkirim'
			];
			header('Content-Type: application/json');
			echo json_encode($response);
			exit;
			}
			catch (\Exception $e)
			{
				die($e->getMessage());
			}
	
		}

		public function loadsurvey()
		{
			try
			{
					$request  	= $this->request;
					$id		 	= $request->getVar('id');
					$role 		= $this->data['role'];
					$userid		= $this->data['userid'];
	
					$model 	  = new \App\Models\DataModel();

	
					$fulldata = [];
					$data = $model->getsurvey();
					
					if($data){
						$response = [
							'status'   => 'sukses',
							'code'     => '1',
							'data' 	   => $data
						];
					}else{
						$response = [
							'status'   => 'gagal',
							'code'     => '0',
							'data'     => 'tidak ada data',
						];
					}
	
					header('Content-Type: application/json');
					echo json_encode($response);
					exit;
				}
			catch (\Exception $e)
			{
				die($e->getMessage());
			}
		}

		public function loadtamu()
		{
			try
			{
					$request  	= $this->request;
					$id		 	= $request->getVar('id');
					$role 		= $this->data['role'];
					$userid		= $this->data['userid'];
	
					$model 	  = new \App\Models\DataModel();

	
					$fulldata = [];
					$data = $model->gettamu();
					
					if($data){
						$response = [
							'status'   => 'sukses',
							'code'     => '1',
							'data' 	   => $data
						];
					}else{
						$response = [
							'status'   => 'gagal',
							'code'     => '0',
							'data'     => 'tidak ada data',
						];
					}
	
					header('Content-Type: application/json');
					echo json_encode($response);
					exit;
				}
			catch (\Exception $e)
			{
				die($e->getMessage());
			}
		}

		public function loadpetugas()
		{
			try
			{
					$request  	= $this->request;
					$id		 	= $request->getVar('id');
					$role 		= $this->data['role'];
					$userid		= $this->data['userid'];
	
					$model 	  = new \App\Models\DataModel();

	
					$fulldata = [];
					$data = $model->getpetugas();
					foreach ($data as $key => $value) {
						$qrpath = $this->qr($value->id.$value->nrp, BASE."/petugas?id=$value->id");
						$data[$key]->qr = $this->data['baseURL'].'/assets/qr/'.$value->id.$value->nrp.'.png';
						$data[$key]->link = BASE."/petugas?id=$value->id";
					}

					if($data){
						$response = [
							'status'   => 'sukses',
							'code'     => '1',
							'data' 	   => $data
						];
					}else{
						$response = [
							'status'   => 'gagal',
							'code'     => '0',
							'data'     => 'tidak ada data',
						];
					}
	
					header('Content-Type: application/json');
					echo json_encode($response);
					exit;
				}
			catch (\Exception $e)
			{
				die($e->getMessage());
			}
		}

	public function qr($name, $value)
	{
		$params['data'] = $value;
		$params['level'] = 'H';
		$params['size'] = 10;
		$params['savename'] = FCPATH.'public/assets/qr/'.$name.".png";
		return  $this->qrcode->generate($params);
	}

	public function submitperkara(){
		try {
			$request  = $this->request;
			$model 	  = new \App\Models\DataModel();

			$data = [];

			$data['nolaporan'] 		= $request->getVar('nolaporan');
			$data['tgllaporan'] 	= $request->getVar('tgllaporan');
			$data['pelapor'] 		= $request->getVar('pelapor');
			$data['tkp'] 			= $request->getVar('tkp');
			$data['kronologis'] 	= str_replace("'","", $request->getVar('kronologis'));
			$data['terlapor'] 		= $request->getVar('terlapor');
			$data['pasal'] 			= $request->getVar('pasal');
			$data['penyidik'] 		= $request->getVar('penyidik');
			$data['sudah'] 			= $request->getVar('sudah');
			$data['hambatan'] 		= $request->getVar('hambatan');
			$data['keterangan'] 	= $request->getVar('keterangan');
			$data['atensi'] 		= $request->getVar('atensi');
			$data['lp']				= $request->getVar('lp');
			$data['l1']				= $request->getVar('l1');
			$data['atensi']			= $request->getVar('atensi');
			$data['p21']			= $request->getVar('p21');
			$data['sp3']			= $request->getVar('sp3');
				
			$data['create_date'] 	= $this->now;
			$data['update_date'] 	= $this->now;
			$data['create_by'] 		= $this->data['userid'];
			$data['update_by'] 		= $this->data['userid'];

			if($request->getVar('id')){
				$res = $model->updateperkara($request->getVar('id'), $data);
			}else{
				$res = $model->saveData('data_perkara', $data);
				$id  = $model->insertID();

			}

			$response = [
					'status'   => 'sukses',
					'code'     => '0',
					'data' 	   => 'terkirim'
			];
			header('Content-Type: application/json');
			echo json_encode($response);
			exit;
			}
			catch (\Exception $e)
			{
				die($e->getMessage());
			}

	}

	public function loadperkara()
	{
		try
		{
				$request  	= $this->request;
				$id		 	= $request->getVar('id');
				$p21		 	= $request->getVar('p21');
				$sp3		 	= $request->getVar('sp3');
				$atensi		 	= $request->getVar('atensi');
				$role 		= $this->data['role'];
				$userid		= $this->data['userid'];

				$model 	  = new \App\Models\DataModel();
				
				$fulldata = [];
				$data = $model->getPerkara('', $atensi, $p21, $sp3);
				
				if($data){
					$response = [
						'status'   => 'sukses',
						'code'     => '1',
						'data' 	   => $data
					];
				}else{
					$response = [
						'status'   => 'gagal',
						'code'     => '0',
						'data'     => 'tidak ada data',
					];
				}

				header('Content-Type: application/json');
				echo json_encode($response);
				exit;
			}
		catch (\Exception $e)
		{
			die($e->getMessage());
		}
	}
	
	public function loadperkarabyid()
	{
		try
		{
				$request  	= $this->request;
				$id		 	= $request->getVar('id');
				$role 		= $this->data['role'];
				$userid		= $this->data['userid'];

				$model 	  = new \App\Models\DataModel();

				$fulldata = [];
				$data = $model->getPerkara($id);
				
				if($data){
					$response = [
						'status'   => 'sukses',
						'code'     => '1',
						'data' 	   => $data
					];
				}else{
					$response = [
						'status'   => 'gagal',
						'code'     => '0',
						'data'     => 'tidak ada data',
					];
				}

				header('Content-Type: application/json');
				echo json_encode($response);
				exit;
			}
		catch (\Exception $e)
		{
			die($e->getMessage());
		}
	}
	
	public function loadtahananbyid()
	{
		try
		{
				$request  	= $this->request;
				$id		 	= $request->getVar('id');
				$role 		= $this->data['role'];
				$userid		= $this->data['userid'];

				$model 	  = new \App\Models\DataModel();

				$fulldata = [];
				$data = $model->getTahanan($id);
				
				if($data){
					$response = [
						'status'   => 'sukses',
						'code'     => '1',
						'data' 	   => $data
					];
				}else{
					$response = [
						'status'   => 'gagal',
						'code'     => '0',
						'data'     => 'tidak ada data',
					];
				}

				header('Content-Type: application/json');
				echo json_encode($response);
				exit;
			}
		catch (\Exception $e)
		{
			die($e->getMessage());
		}
	}

		
	public function deleteperkara()
	{
		try
		{
				$request  	= $this->request;
				$id		 	= $request->getVar('id');
				$role 		= $this->data['role'];
				$userid		= $this->data['userid'];

				$model 	  = new \App\Models\DataModel();

				$fulldata = [];
				$data = $model->deleteperkara($id);
				
				if($data){
					$response = [
						'status'   => 'sukses',
						'code'     => '1',
						'data' 	   => $data
					];
				}else{
					$response = [
						'status'   => 'gagal',
						'code'     => '0',
						'data'     => 'tidak ada data',
					];
				}

				header('Content-Type: application/json');
				echo json_encode($response);
				exit;
			}
		catch (\Exception $e)
		{
			die($e->getMessage());
		}
	}
		
	public function deletetahanan()
	{
		try
		{
				$request  	= $this->request;
				$id		 	= $request->getVar('id');
				$role 		= $this->data['role'];
				$userid		= $this->data['userid'];

				$model 	  = new \App\Models\DataModel();

				$fulldata = [];
				$data = $model->deletetahanan($id);
				
				if($data){
					$response = [
						'status'   => 'sukses',
						'code'     => '1',
						'data' 	   => $data
					];
				}else{
					$response = [
						'status'   => 'gagal',
						'code'     => '0',
						'data'     => 'tidak ada data',
					];
				}

				header('Content-Type: application/json');
				echo json_encode($response);
				exit;
			}
		catch (\Exception $e)
		{
			die($e->getMessage());
		}
	}

	public function selesaiperkara(){
		try {
			$request  = $this->request;
			$model 	  = new \App\Models\DataModel();

			$data = [];
			$data['status']			= 1;

			$res = $model->updateperkara($request->getVar('id'), $data);
			$response = [
					'status'   => 'sukses',
					'code'     => '0',
					'data' 	   => 'terkirim'
			];
			header('Content-Type: application/json');
			echo json_encode($response);
			exit;
			}
			catch (\Exception $e)
			{
				die($e->getMessage());
			}

	}

	function downloadexcel(){

		$file = 'public/template.xlsx';
		$reader = new Xlsx();
		$spreadsheet = $reader->load($file);
		$sheet_data = $spreadsheet->getActiveSheet();

		$request	= $this->request;
		$status		= $request->getVar('status');
		$model 	  = new \App\Models\DataModel();
		$data = $model->getPerkaraByStat($status);

		// Data Penghuni
		$sheet_data->setCellValue('A1', 'No Laporan/ Tgl. Laporan');
		$sheet_data->setCellValue('B1', 'Pelapor/ TKP');
		$sheet_data->setCellValue('C1', 'Kronologis');
		$sheet_data->setCellValue('D1', 'Terlapor');
		$sheet_data->setCellValue('E1', 'Pasal/ Penyidik');
		$sheet_data->setCellValue('F1', 'Sudah Dilakukan');
		$sheet_data->setCellValue('G1', 'Hambatan');
		$sheet_data->setCellValue('H1', 'Keterangan');
	
		$col = 2;
		foreach ($data as $key => $value) {
			$sheet_data->setCellValue('A' . $col, $value->nolaporan . '/' . $value->tgllaporan );
			$sheet_data->setCellValue('B' . $col, $value->pelapor . '/' . $value->tkp );
			$sheet_data->setCellValue('C' . $col, $value->kronologis );
			$sheet_data->setCellValue('D' . $col, $value->terlapor );
			$sheet_data->setCellValue('E' . $col, $value->pasal . '/' . $value->penyidik );
			$sheet_data->setCellValue('F' . $col, $value->sudah );
			$sheet_data->setCellValue('G' . $col, $value->hambatan );
			$sheet_data->setCellValue('H' . $col, $value->keterangan );
			$col++;
		}

		$writer = new Wxlsx($spreadsheet);
		$fileo = 'public/cetak/perkara_'.($status == 1 ? 'sudah': 'belum').'_'.date('Y-m-d').'.xlsx';
		$writer->save($fileo);
		chmod($fileo, 0777); 
		
		$response = [
			'status'   => 'success',
			'code'     => '0',
			'data'     => $fileo,
		];
		header('Content-Type: application/json');
		echo json_encode($response);
	}

	public function getkronologis()
	{
		try
		{
				$request  	= $this->request;
				$id		 	= $request->getVar('id');

				$model 	  = new \App\Models\DataModel();


				$fulldata = [];
				$data = $model->getPerkara($id);
				
				if($data){
					$response = [
						'status'   => 'sukses',
						'code'     => '1',
						'data' 	   => $data
					];
				}else{
					$response = [
						'status'   => 'gagal',
						'code'     => '0',
						'data'     => 'tidak ada data',
					];
				}

				header('Content-Type: application/json');
				echo json_encode($response);
				exit;
			}
		catch (\Exception $e)
		{
			die($e->getMessage());
		}
	}

	public function loadtahanan()
	{
		try
		{
				$request  	= $this->request;
				$id		 	= $request->getVar('id');
				$role 		= $this->data['role'];
				$userid		= $this->data['userid'];

				$model 	  = new \App\Models\DataModel();
				
				$fulldata = [];
				$data = $model->getTahanan('');
				
				if($data){
					$response = [
						'status'   => 'sukses',
						'code'     => '1',
						'data' 	   => $data
					];
				}else{
					$response = [
						'status'   => 'gagal',
						'code'     => '0',
						'data'     => 'tidak ada data',
					];
				}

				header('Content-Type: application/json');
				echo json_encode($response);
				exit;
			}
		catch (\Exception $e)
		{
			die($e->getMessage());
		}
	}

	public function submittahanan(){
		try {
			$request  = $this->request;
			$model 	  = new \App\Models\DataModel();

			$data = [];

			$data['no_lp']			= $request->getVar('no_lp');
			$data['nama_tahanan']	= $request->getVar('nama_tahanan');
			$data['sp_han']			= $request->getVar('sp_han');
			$data['habis']			= $request->getVar('habis');
			$data['jang_han']		= $request->getVar('jang_han');
			$data['perpanjangan']	= $request->getVar('perpanjangan');
				
			$data['create_date'] 	= $this->now;
			$data['update_date'] 	= $this->now;
			$data['create_by'] 		= $this->data['userid'];
			$data['update_by'] 		= $this->data['userid'];
			
			if($request->getVar('id')){
				$res = $model->updatetahanan($request->getVar('id'), $data);
			}else{
				$res = $model->saveData('data_tahanan', $data);
				$id  = $model->insertID();
			}

			$response = [
					'status'   => 'sukses',
					'code'     => '0',
					'data' 	   => 'terkirim'
			];
			header('Content-Type: application/json');
			echo json_encode($response);
			exit;
			}
			catch (\Exception $e)
			{
				die($e->getMessage());
			}

	}
}
