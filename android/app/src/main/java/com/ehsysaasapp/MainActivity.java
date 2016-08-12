package com.ehsysaasapp;

import android.Manifest;
import android.content.CursorLoader;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.database.Cursor;
import android.net.Uri;
import android.os.Bundle;
import android.provider.ContactsContract;
import android.util.Log;
import android.widget.Toast;

import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        if (checkSelfPermission(Manifest.permission.READ_CONTACTS) != PackageManager.PERMISSION_GRANTED) {
            requestPermissions(new String[]{Manifest.permission.READ_CONTACTS}, 1);
        }
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {
        switch (requestCode) {
            case 1:
                if (permissions[0].equals(Manifest.permission.READ_CONTACTS)) {
                    if (grantResults[0] == PackageManager.PERMISSION_GRANTED) {
                        Toast.makeText(MainActivity.this, "granted ...", Toast.LENGTH_SHORT).show();
                    }
                }
                break;
        }
    }

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "EhsySaaSApp";
    }

    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);

        if (requestCode != 1 || requestCode != RESULT_OK )
            return;

        Uri contactData = data.getData();
        //Log.e("caca", data.getData().toString());

        CursorLoader cursorLoader = new CursorLoader(this,contactData,null,null,null,null);
        Cursor c = cursorLoader.loadInBackground();

        c.moveToFirst();
        String RNMessage = this.getContactInfo(c);
        MainApplication app = (MainApplication)getApplication();
        app.anExampleReactPackage.rnExampleInterface.SendMessage("rnMessage :"+RNMessage);
        c.close();
    }

    private String getContactInfo (Cursor cursor) {
        String name = "";
        String number = "";
        String contactId = cursor.getString(cursor.getColumnIndex(ContactsContract.Contacts._ID));
        String query = ContactsContract.CommonDataKinds.Phone.CONTACT_ID + "=" + contactId;
        Uri aUri = ContactsContract.CommonDataKinds.Phone.CONTENT_URI;
        Cursor phones = getContentResolver().query(aUri, null, query, null, null);
        String dn = ContactsContract.Contacts.DISPLAY_NAME;
        String pn = ContactsContract.CommonDataKinds.Phone.NUMBER;
        if (phones.moveToFirst()) {
            for (; !phones.isAfterLast(); phones.moveToNext()) {
                name = cursor.getString(cursor.getColumnIndex(dn));
                number = phones.getString(phones.getColumnIndex(pn));
            }
            phones.close();
        }
        String result = "name: " + name + ", number: " + number;
        //Log.e("hah",result);
        return result;
    }
}
