// JavaScript Document
$(document).ready(function(e) {	
document.addEventListener("deviceready",function(){
	
	 try 
    {
        File dbFile = getDatabasePath("ejemplo.db");
        if(!dbFile.exists()){
            this.copy("ejemplo.db",dbFile.getAbsolutePath());
        }
     } 
     catch (Exception e)
     {
     e.printStackTrace();
     }

//And our copy function:

   void copy(String file, String folder) throws IOException 
    {
     File CheckDirectory;
     CheckDirectory = new File(folder);

     String parentPath = CheckDirectory.getParent();

     File filedir = new File(parentPath);
     if (!filedir.exists()) {
         if (!filedir.mkdirs()) {
             return;
         }
     }

        InputStream in = this.getApplicationContext().getAssets().open(file);
        File newfile = new File(folder);
        OutputStream out = new FileOutputStream(newfile);

        byte[] buf = new byte[1024];
        int len; while ((len = in.read(buf)) > 0) out.write(buf, 0, len);
        in.close(); out.close();
    }
	
}); 
});

